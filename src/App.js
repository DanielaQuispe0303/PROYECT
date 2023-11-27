import React, { useState } from 'react';
import './App.css';
import Incendio from './assets/Incendios.jpg'
import capibara from './assets/capibara.jpeg'
import deforest from './assets/deforestacion.jpg'
import ruina from './assets/ruina.jpg'
import solo from './assets/solo.jpg'


function App() {
  const [section, setSection] = useState('inicio');

  const changeSection = (newSection) => {
    setSection(newSection);
  };

  return (
    <div className="App">
      <header>
      <h1>DEFORESTACIÓN</h1>
      <img src={ Incendio } />
      </header>

      <nav>
        <button onClick={() => changeSection('inicio')}>INICIO</button>
        <button onClick={() => changeSection('seccion1')}>PROBLEMÁTICA</button>
        <button onClick={() => changeSection('seccion2')}>ACCIONES</button>
      </nav>

      <main>
        {section === 'inicio' && (
          <section>
            <h2>IMPACTO</h2>
            <p>Bolivia presenta una gran biodiversidad de flora y fauna y elevadas tasas de endemismo. Pero esta gran biodiversidad está cada vez más amenazada. Considerando que la pérdida de hábitat, y en especial la pérdida de bosques es la principal amenaza para la biodiversidad, en este artículo analizamos como la apuesta política de promoción del agronegocio y la ampliación de la frontera agropecuaria, pueden afectar las tendencias de pérdida de biodiversidad en Bolivia.</p>
            <p>Para comprender mejor la relación entre la biodiversidad y la deforestación, es importante considerar que Bolivia es uno de los países con mayor superficie forestal del mundo, con más de 54.7 millones de hectáreas de bosque</p>
            <p>La mitad de la pérdida de cobertura de bosques corresponde a bosques primarios, que tienen un valor muy alto para la biodiversidad</p>
            <center><img className='capi' src={ capibara } /></center>
            <p>En términos de incendios las tendencias son aún más preocupantes. Comunidades indígenas en Bolivia han reportado la propagación en los últimos días de incendios forestales que avanzaron peligrosamente hasta sus viviendas, mientras el fuego continúa arrasando con la flora y la fauna, y muchos han perdido sus hogares o han tenido que evacuar. </p>
            <p>El fuego ha arrasado con más de dos millones de hectáreas en todo Bolivia, según información otorgada por el director de la Autoridad de Bosques y Tierras (ABT), Luis Flores, en conferencia de prensa.</p>
            <p>El fuego ocasiona la pérdida de suelo fértil, el aumento de la erosión y la contaminación de los cuerpos de agua, añadió. Además, es una amenaza para los territorios indígenas, comunidades campesinas y la sociedad en general.</p>
            <p>La pérdida de vegetación, la disminución de la materia orgánica y los cambios en las propiedades del suelo podrían ocasionar una disminución en las tasas de infiltración, disponibilidad de agua y aumento de escurrimiento. Las cenizas pueden aumentar la capacidad de infiltración y prevenir o retrasar la escorrentía hasta ciertas cantidades e intensidades de precipitaciones</p>
            <p>La pérdida de bosque implica la pérdida de la posibilidad de regular el clima en el lugar, lo que se traduce en sequías más duras que, a su vez, hacen que el bosque sea material combustible para los incendios forestales</p>
            <center><img className='capi' src={ solo } /></center>
            <p>Para la bióloga Villarpando, las principales causas de la pérdida de bosques en Bolivia son la ganadería, la agricultura en pequeña escala y la agricultura de gran escala. Seguido de la construcción de infraestructura de transporte, los incendios forestales y, en menor medida, la extracción de madera a gran escala.</p>
            <p>Los incendios forestales pueden producir cambios en el ciclo hidrológico de las respectivas cuencas hidrográficas. De esta manera, se agrava la situación de la crisis hídrica que se vive en Bolivia, que se prolongará hasta el próximo año, por lo menos.</p>
          </section>
        )}

        {section === 'seccion1' && (
          <section>
            <h2>PROBLEMÁTICA</h2>
            <p>Los bosques, que contribuyen a regular el ciclo del agua, conservar los suelos y capturar carbono de la atmósfera, cubren un tercio de la superficie terrestre mundial y de ellos depende la vida de 1.600 millones de personas </p>
            <p>Según datos del Instituto Nacional de Estadísticas de Bolivia, la tasa de deforestación en nuestro país ha ido en aumento en los últimos años, alcanzando una pérdida anual de aproximadamente 200,000 hectáreas de bosques. La expansión de la agricultura, la ganadería y la minería son algunas de las principales causas detrás de esta alarmante cifra. </p>
            <p>La quema de bosques, muchas veces utilizada para limpiar áreas destinadas a la agricultura, también es una fuente significativa de contaminación del aire y contribuye a la emisión de gases de efecto invernadero. Según el Ministerio de Medio Ambiente y Agua de Bolivia, se estima que más del 70% de las emisiones de gases de efecto invernadero del país provienen de la deforestación y las prácticas de quema de biomasa.</p>
            <p>En una inauguración de una conferencia internacional de expertos para detener la deforestación y aumentar la cubierta forestal, Figueres insistió en que no se trata de «salvar el planeta», sino de «garantizar el bienestar» en la actualidad y en el futuro. </p>
            <center><img className='deforest' src={ ruina } /></center>
            <p>El problema de pérdida de bosques está alcanzando niveles críticos en Bolivia. A diferencia del chaqueo o la tala manual que se practicaba hasta hace poco, hoy en día los desmontes son altamente tecnificados. Se emplea maquinaria pesada de diversa índole, principalmente tractores de orugas encadenados entre sí por pesadas cadenas que arrastran por el bosque. El resultado es el desmonte a gran escala. En Bolivia, se desmonta a un ritmo de 800 hectáreas por día. Si la mancha urbana de la ciudad de La Paz fuera bosque, desaparecería en una semana. Santa Cruz urbano aguantaría no más de dos semanas.</p>
            <p>Muy aparte de los sucesos que se llevan en el trópico de Bolivia, el municipio de La Paz se caracteriza por tener un clima árido y escaza flora y fauna, es por esto que los cuatro bosques urbanos con los que cuenta son de suma importancia para mantener el equilibrio ambiental en la ciudad.</p>
            <p>Los bosques urbanos sufren avasallamientos en parte debido a los problemas limítrofes existentes con municipios aledaños, que permiten que estos últimos entreguen permisos de construcción sobre terrenos de La Paz, por otro lado el crecimiento de la mancha urbana también representa un riesgo para la integridad de estas áreas verdes.</p>
            <center><img className='deforest' src={ deforest } /></center>
          </section>
        )}

        {section === 'seccion2' && (
          <section>
            <h2>ACCIONES A TOMAR</h2>
            <p>Los incendios empeoran el cambio climático y a su vez, el cambio climático intensifica la aparición de éstos. Por lo tanto, se hace imprescindible concienciar a la sociedad sobre la importancia de la prevención de incendios forestales desde la acción individual.</p>
            <div className="container">
              <div className="grid-item">La misión principal de esta planificación es "disuadir, sensibilizar, controlar y sancionar" a las personas y grupos que incurran en quemas ilegales, también llamados chaqueos, en sectores de riesgo y que no cuenten con autorización.</div>             
              <br></br>
              <div className="grid-item">Contar con la Educación Ambiental enfocada a la prevención de incendios forestales es de vital importancia para lograr un cambio en el comportamiento de la población, a través de un proceso educativo que permita adquirir conocimientos, destrezas y valores para conservar el medio ambiente y brindar una óptima calidad de vida.</div>
              <br></br>
              <div className="grid-item">Abandonar residuos como botellas y objetos de cristal –que actúan como una lupa–, papeles u otro material combustible puede acabar en tragedia. Fumar en el bosque o en sus alrededores es especialmente peligroso: no se deben arrojar colillas o cerillas, ni siquiera a la carretera por la ventanilla del coche. El viento puede transportarlas y activarlas.</div>
              <br></br>
              <div className="grid-item">El 95% de los incendios forestales son provocados por el ser humano, en su gran mayoría por negligencias. Entre el 1 de junio y el 1 de noviembre es la época de mayor riesgo de incendios y sobre todo, el mediodía y el atardecer y los fines de semana de julio y agosto. Cualquier pequeña chispa o llama pueden causar un desastre. Por ello, no hay que hacer fogatas o barbacoas ni quemar rastrojos o demás restos agroforestales.</div>
              <br></br>
              <div className="grid-item">La normativa medioambiental se debería aplicar en todo su rigor contra quienes provocan incendios forestales. Asimismo, se necesitan más medios humanos y técnicos para impedir estos delitos. O al menos que no queden impunes.</div>
              <br></br>
              <div className="grid-item">Divulgación de conocimiento en la ecología del fuego y la gestión de los incendios forestales.</div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
