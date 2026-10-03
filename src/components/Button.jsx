function Button({ text, onClick, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;
//parent component se data Button component ke andar bhejna props khta hn
//| Prop        | Kaam                           |
// | `text`      | Button ke andar kya likha hoga |
// | `onClick`   | Button click hone par kya hoga |
// | `className` | Extra CSS class                |