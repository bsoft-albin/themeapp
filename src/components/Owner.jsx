export default function Owner({propOwnerfn}) {
    return(
        <section id="hero" className="d-flex align-items-center">
            <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <h1>Albin Anthony</h1>
                <h2>I'm a professional Full Stack Devloper from Kallakurichi</h2>
                <a onClick={() =>propOwnerfn('about')} className="btn-about pntr">About Me</a>
            </div>
        </section>
    )
}