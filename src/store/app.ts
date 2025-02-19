import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface Todo {
  id: number;
  completed: boolean;
  text: string;
}

type FilterType = 'all' | 'completed';

let defaultId = 1;

export const useAppStore = defineStore('app', () => {
  // state
  const todos = ref<Todo[]>([]);
  const filter = ref<FilterType>('all');

  // getters
  const filteredTodos = computed(() => {
    if (filter.value === 'all') {
      return todos.value;
    }
    return todos.value.filter(todo => todo.completed);
  });

  // actions
  function addTodo(todo: Omit<Todo, 'id'>) {
    todos.value.push({
      ...todo,
      id: defaultId++,
    });
  }

  function removeTodo(id: number) {
    todos.value = todos.value.filter(todo => todo.id !== id);
  }

  function updateTodo(id: number, value: boolean) {
    const todo = todos.value.find(todo => todo.id === id);
    if (todo) {
      todo.completed = value;
    }
  }

  function toggleFilter(newFilter: FilterType) {
    filter.value = newFilter;
  }

  return {
    // state
    todos,
    filter,
    // getters
    filteredTodos,
    // actions
    addTodo,
    removeTodo,
    updateTodo,
    toggleFilter,
  };
});

export const filters: FilterType[] = ['all', 'completed'];
