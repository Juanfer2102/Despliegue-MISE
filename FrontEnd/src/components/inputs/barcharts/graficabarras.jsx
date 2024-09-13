
import React, { useState } from 'react';
import { BarChart, Card, Divider, Switch } from '@tremor/react';

const data = [
  {
    date: 'Jan',
    'Este Año': 60,
    'Año Anterior': 28,
  },
  {
    date: 'Feb',
    'Este Año': 70,
    'Año Anterior': 30,
  },
  {
    date: 'Mar',
    'Este Año': 80,
    'Año Anterior': 70,
  },
  {
    date: 'Apr',
    'Este Año': 55,
    'Año Anterior': 45,
  },
  {
    date: 'May',
    'Este Año': 56,
    'Año Anterior': 80,
  },
  {
    date: 'Jun',
    'Este Año': 100,
    'Año Anterior': 85,
  },
  {
    date: 'Jul',
    'Este Año': 100,
    'Año Anterior': 85,
  },
  {
    date: 'Ago ',
    'Este Año': 100,
    'Año Anterior': 85,
  },
  {
    date: 'Sep',
    'Este Año': 100,
    'Año Anterior': 85,
  },
  {
    date: 'Oct',
    'Este Año': 100,
    'Año Anterior': 85,
  }
];

function valueFormatter(number) {
  return number.toLocaleString();
}

export default function Grafica() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <>
      <Card className="bg-greyBlack xl:w-[39rem] lg:w-[35rem] rounded-xl border-greyBlack  sm:max-w-2xl z-10">
        <h3 className=" font-semibold text-white dark:text-dark-tremor-content-strong">
          Gráfica de empresas desarrolladas (2023-2024)
        </h3>
        <BarChart
          data={data}
          index="date"
          categories={
            showComparison ? ['Año Anterior', 'Este Año'] : ['Este Año']
          }
          colors={showComparison ? ['cyan', 'blue'] : ['blue']}
          valueFormatter={valueFormatter}
          yAxisWidth={50}
          yAxisDomain={[0, 100]} // Establecer el rango del eje Y de 0 a 100
          className="hidden h-60 sm:block "
        />
        <BarChart
          data={data}
          index="date"
          categories={
            showComparison ? ['Año Anterior', 'Este Año'] : ['Este Año']
          }
          colors={showComparison ? ['cyan', 'blue'] : ['blue']}
          valueFormatter={valueFormatter}
          yAxisDomain={[0, 100]} // Establecer el rango del eje Y de 0 a 100
          showYAxis={false}
          className="h-56 sm:hidden"
        />
        <Divider />
        <div className="flex items-center space-x-3">
          <Switch
            id="comparison"
            onChange={() => setShowComparison(!showComparison)}
          />
          <label
            htmlFor="comparison"
            className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
          >
            Mostrar mismo periodo el año pasado
          </label>
        </div>
      </Card>
    </>
  );
}
