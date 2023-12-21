import './App.css';
import FeaturesComponent from './components/features/features.component';
import FooterComponent from './components/footer/footer.component';
import { Hero } from './components/hero/hero';
import MenuComponent from './components/menu/menu.component';

function App() {
  return (
    <div className="App">
      <Hero />
      <FeaturesComponent/>
      <MenuComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
