import iconAlimentos from '../assets/categories/alimentos.svg';
import iconEletronicos from '../assets/categories/eletronicos.svg';
import iconTransporte from '../assets/categories/transporte.svg';
import iconCasa from '../assets/categories/casa.svg';
import iconSaude from '../assets/categories/saude.svg';
import iconOutros from '../assets/categories/outros.svg';
import iconRendimentos from '../assets/categories/rendimentos.svg';

const categoryMap = [
  {
    code: 'Alimentos',
    bgColor: '#E87D41',
    icon: iconAlimentos,
  },
  {
    code: 'Eletrônicos',
    bgColor: '#4183E8',
    icon: iconEletronicos,
  },
  {
    code: 'Transporte',
    bgColor: '#E8A541',
    icon: iconTransporte,
  },
  {
    code: 'Casa',
    bgColor: '#D3534B',
    icon: iconCasa,
  },
  {
    code: 'Saúde',
    bgColor: '#E870A2',
    icon: iconSaude,
  },
  {
    code: 'Outros',
    bgColor: '#216544',
    icon: iconOutros,
  },
  {
    code: 'Rendimentos',
    bgColor: '#3FA15A',
    icon: iconRendimentos,
  },
];

export default categoryMap;
