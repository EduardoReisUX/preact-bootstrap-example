import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./style.css";

interface Props {
  user: string;
}

const Profile: FunctionalComponent<Props> = (props: Props) => {
  const { user } = props;
  const [time, setTime] = useState<number>(Date.now());
  const [count, setCount] = useState<number>(0);

  // gets called when this route is navigated to
  useEffect(() => {
    const timer = window.setInterval(() => setTime(Date.now()), 1000);

    // gets called just before navigating away from the route
    return (): void => {
      clearInterval(timer);
    };
  }, []);

  // update the current counter
  const modify = (action: string): void => {
    action === "decrement" && setCount(count - 1);
    action === "reset" && setCount(0);
    action === "increment" && setCount(count + 1);
  };

  return (
    <div class={style.profile}>
      <h1 class="mt-5 mb-3">Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>
      <div class="mb-3">Current time: {new Date(time).toLocaleString()}</div>
      <h3 class="text-center">{count}</h3>
      <div class="text-center m-2">
        <button
          class="btn btn-primary p-2 m-2"
          onClick={() => modify("decrement")}
        >
          Decrement counter
        </button>
        <button
          class="btn btn-outline-primary p-2"
          onClick={() => modify("reset")}
        >
          Reset
        </button>
        <button
          class="btn btn-primary p-2 m-2"
          onClick={() => modify("increment")}
        >
          Increment counter
        </button>
      </div>
    </div>
  );
};

export default Profile;
