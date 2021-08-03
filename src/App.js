import './App.css';
import React from "react";



class App extends React.Component {

  state = {
    Profil: {
      fullName: "Slama Wael",
      bio: "Ingénieur en Génie électrique Informatique industriel avec une experience de 2 ans dans le domaine travaux électrique & électricité de bâtiments et 3 ans dans le domaine d'entretien & maintenance industrielle",
      imgSrc: "/photo3.jpg",
      profession: "chef d'entreprise 'slama traveaux' opperant dans le domaine d'entretien & maintenance industrielle",
    },
    show: true,
    count: 0,
  }

  handelhide=()=>this.setState({show : !this.state.show, count:0})
  componentDidMount () {
    setInterval ( () => {
      this.setState(count => ({count:this.state.count +1}));
    } , 500 )
  } ;


  render() {
    return(
      <div className="mb-0">
        <button onClick={() => this.handelhide()}>{this.state.show ? "dont show profile" : "show profile"}</button>
        {this.state.show ? (
        <>
        <br></br>
        <img className="mb-4" src={this.state.Profil.imgSrc} alt="myphoto" />
        <h1 className="mb-1">{this.state.Profil.fullName}</h1>
        <h2 className="mb-2">{this.state.Profil.bio}</h2>
        <h2 className="mb-3">{this.state.Profil.profession}</h2>
        </>) : null}
        {this.state.show ? 
        <p>{this.state.count}</p>
        : null }
        </div>
    )
  }
 }

export default App;