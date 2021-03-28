

function Section({ title, flag, children }) {
  const TitleFlag = () => (
    flag ? <h1>{title}</h1> : <h3>{title}</h3>
  );
  
  return (
    <>
      <TitleFlag />
      {children}
    </>
  );
}

export default Section;