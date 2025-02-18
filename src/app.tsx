import { FunctionalComponent, ref } from 'vue';
import styles from './index.less';

export default {
  name: 'App',

  setup() {
    console.log('styles', Object.values({ a: 1 }));

    const count = ref(0);
    const add = () => count.value++;

    const CounterButton: FunctionalComponent<{
      onClick: () => void;
      value: number;
    }> = ({ onClick, value }) => {
      return <button onClick={onClick}>count is {value}</button>;
    };

    return () => (
      <div class={styles.content}>
        <h1>Hello world!</h1>
        <div class="test">
          <a href="https://vuejs.org" target="_blank">
            11111
          </a>
        </div>
        <h1>Rspack + Vue JSX</h1>
        <div class="card">
          <CounterButton onClick={add} value={count.value} />
        </div>
      </div>
    );
  },
};
