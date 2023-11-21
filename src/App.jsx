import './App.css';



function App(props) {
  // code here
  const imgData = props.myData();
  return(
    <>
    <h1>Kalvium Gallery</h1>
    <div>
      {imgData.map((item)=>{
       return <img key={item.id} src={item.img} alt="" />
      })}
    </div>
    </>
  )

}

export default App;
