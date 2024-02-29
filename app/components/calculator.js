import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CalculatorComponent extends Component {
  @tracked resultados = [];
  @tracked model = { numero1: 0.0, numero2: 0.0 };

  sumar = () => {
    this.resultados = [
      ...this.resultados,
      parseFloat(this.model.numero1) + parseFloat(this.model.numero2),
    ];
  };

  restar = () => {
    this.resultados = [
      ...this.resultados,
      parseFloat(this.model.numero1) - parseFloat(this.model.numero2),
    ];
  };

  multiplicar = () => {
    this.resultados = [
      ...this.resultados,
      parseFloat(this.model.numero1) * parseFloat(this.model.numero2),
    ];
  };

  dividir = () => {
    this.resultados = [
      ...this.resultados,
      parseFloat(this.model.numero1) / parseFloat(this.model.numero2),
    ];
  };
}
