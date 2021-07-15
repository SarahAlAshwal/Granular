interface Props {
  label: string
  value: number
  symbol?: string
}
function FieldCard(props: Props) {
  return (
    <div>
    <label>{props.label}</label>
    <span>{props.value}</span>
    {props.symbol === 'deg' && <span>&#8451;</span>}
    {props.symbol !== 'deg' && <span>%</span>}
    </div>
  );
}

export default FieldCard;