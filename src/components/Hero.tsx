import profilePicture from "../assets/profile_picture.jpg"

export default function Hero() {
    return(
        <div className="hero-container">
        <img src={profilePicture}/>
        <div className="hero-fullname">Jonas Hencke</div>
        <div className="hero-title">Frontend-Entwickler</div>
        <div className="hero-description">Begeistert von gutem Design und modernen Technologien. Mit viel Neugier und dem Ziel lebenslang zu lernen.</div>
        <button className="hero-button">Mehr Infos ↓</button>
        </div>
    )
}