import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const dadosLinha = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [{ data: [65, 68, 53, 87, 88, 69] }]
};

const dadosPizza = [
  {
    name: 'Jardim Paulista',
    temp: 18,
    color: '#556B2F',
    legendFontColor: '#2F3A22',
    legendFontSize: 14
  },
  {
    name: 'Portal dos Nobres',
    temp: 20,
    color: '#6B8E23',
    legendFontColor: '#2F3A22',
    legendFontSize: 14
  },
  {
    name: 'Três Pontes',
    temp: 15,
    color: '#7A8F55',
    legendFontColor: '#2F3A22',
    legendFontSize: 14
  },
  {
    name: 'Jardim Alto da Boa Vista',
    temp: 15,
    color: '#A3B18A',
    legendFontColor: '#2F3A22',
    legendFontSize: 14
  }
];

const chartConfig = {
  backgroundGradientFrom: '#F4F1EA',
  backgroundGradientTo: '#F4F1EA',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(85, 107, 47, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(47, 58, 34, ${opacity})`,
  strokeWidth: 3,
  barPercentage: 0.5,
  useShadowColorFromDataset: false
};

export default function Dashboard() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <Text style={styles.titulo}>
        🌿 Estação Meteorológica SESI
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Últimas Medições</Text>

        <View style={styles.medicao}>
          <Text style={styles.medicaoTexto}>12/06/2026</Text>
          <Text style={styles.valor}>21°C</Text>
        </View>

        <View style={styles.medicao}>
          <Text style={styles.medicaoTexto}>11/06/2026</Text>
          <Text style={styles.valor}>22°C</Text>
        </View>

        <View style={styles.medicao}>
          <Text style={styles.medicaoTexto}>12/06/2026</Text>
          <Text style={styles.valor}>60%</Text>
        </View>

        <View style={styles.medicao}>
          <Text style={styles.medicaoTexto}>11/06/2026</Text>
          <Text style={styles.valor}>80%</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          Acompanhe em tempo real
        </Text>

        <LineChart
          data={dadosLinha}
          width={width - 60}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.grafico}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          Bairros de Mirandópolis
        </Text>

        <PieChart
          data={dadosPizza}
          width={width - 60}
          height={220}
          chartConfig={chartConfig}
          accessor="temp"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDE4D3'
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2F3A22',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 10
  },

  card: {
    backgroundColor: '#F4F1EA',
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 18,
    borderRadius: 20,
    elevation: 4
  },

  cardTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#556B2F',
    marginBottom: 15
  },

  medicao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  medicaoTexto: {
    fontSize: 15,
    color: '#444'
  },

  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#556B2F'
  },

  grafico: {
    borderRadius: 16,
    alignSelf: 'center'
  }
});