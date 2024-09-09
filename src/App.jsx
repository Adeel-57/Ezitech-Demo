import './App.css'
import AppDownload from './components/AppDownload/AppDownload'
import Courses_offers from './components/Courses-offfers/Courses_offers'
import Courses from './components/Courses-section/Courses'
import Demo from './components/Demo-section/Demo'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero-section/Hero'
import InternShips from './components/Internships/InternShips'

function App() {

  return (
    <>
      <div className="help-desk">
        <div className="help-icon">
          <i><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.5em" viewBox="0 0 24 24">
            <g fill="none">
              <g clip-path="url(#akarIconsWhatsappFill0)">
                <path fill="white" fill-rule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967s-.47-.148-.669.15c-.198.297-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52s.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074s2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413s.247-1.289.173-1.413s-.272-.198-.57-.347m-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884a9.8 9.8 0 0 1 6.988 2.899a9.82 9.82 0 0 1 2.892 6.992c-.002 5.45-4.436 9.885-9.884 9.885m8.412-18.297A11.82 11.82 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.86 11.86 0 0 0 1.587 5.945L0 24l6.304-1.654a11.9 11.9 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.48-8.413" clip-rule="evenodd" />
              </g>
              <defs>
                <clipPath id="akarIconsWhatsappFill0">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </g>
          </svg></i>
        </div>
        <div className="helping-text">
          <p>Need Help?<span>Chat with us</span></p>
        </div>
      </div>
      <Header />
      <Hero />
      <Demo />
      <Courses />
      <Courses_offers />
      <InternShips />
      <AppDownload />
      <Footer />
    </>
  )
}

export default App
