import './FieldCard.css';
interface Props {
  label: string
  value: number
  symbol?: string
}
function FieldCard(props: Props) {
  return (
    <div id='field-card-container'>
    <label className='field-label'>{props.label}</label>
    { props.value && <span >{props.value}</span>} 
    { !props.value && <span className='placeholder'>{props.symbol === 'deg'? 'Temperature' : 'Humididty'}</span>}
    {props.symbol === 'deg' && <span className='symbol'>&#8451;</span>}
    {props.symbol !== 'deg' && <span className='symbol'>%</span>}
    </div>
  );
}

export default FieldCard;