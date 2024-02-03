import { healthBarContainerCSS, healthBarCSS } from './styles';

export const HealthBar = ({ health }: { health: number }) => {
  return (
    <div className={healthBarContainerCSS}>
      Health
      <div className={healthBarCSS} style={{ width: `${health}%` }}></div>
    </div>
  );
};
