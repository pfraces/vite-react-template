import ClickCounter from './ClickCounter/ClickCounter.jsx';
import { scope } from './Landing.module.css';

export default function Landing() {
  return (
    <div className={`${scope} column center`}>
      <div className="grow padded column-reverse">
        <div className="row gap">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo vite" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src="/react.svg" className="logo react" alt="React logo" />
          </a>
        </div>
      </div>

      <h1 className="title">Vite + React Template</h1>

      <div className="grow padded">
        <ClickCounter />
      </div>
    </div>
  );
}
