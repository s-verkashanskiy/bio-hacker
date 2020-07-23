import React from 'react';
import { ResponsiveWaffle } from '@nivo/waffle';
import { ResponsivePie } from '@nivo/pie';

function ClientChart() {
  const data = [
    {
      id: 'Пропуски',
      label: 'Пропуски',
      value: 4,
      color: '#468df3',
    },
    {
      id: 'Успешно',
      label: 'Успешно',
      value: 28,
      color: '#ba72ff',
    },
  ];

  const pieData = [
    {
      id: 'D3 2000Me',
      label: 'D3 2000Me',
      value: 182,
      color: 'hsl(24, 70%, 50%)',
    },
    {
      id: 'Q10',
      label: 'Q10',
      value: 161,
      color: 'hsl(328, 70%, 50%)',
    },
    {
      id: 'B12',
      label: 'B12',
      value: 268,
      color: 'hsl(75, 70%, 50%)',
    },
    {
      id: 'B6',
      label: 'B6',
      value: 87,
      color: 'hsl(99, 70%, 50%)',
    },
    {
      id: 'E',
      label: 'E',
      value: 125,
      color: 'hsl(61, 70%, 50%)',
    },
  ];

  return (
    <div className="container">
      <h3 className="mt-4 text-center">Твой прогресс </h3>
      <div className="progress mt-4">
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: '25%'}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
      <div className="card-deck">
        <div className="card mt-4 border-success" style={{ width: '36rem' }}>
          <div className="card-body">
            <h5 class="card-title">Достижения</h5>
            <p className="card-text">
              График показывает серым цветом сколько дней осталось до окночания
              программы. Красным цветом показано сколько раз ты пропустил прием,
              а синим сколько дней успешно.
            </p>
            <div className="container" style={{ height: '400px' }}>
              <ResponsiveWaffle
                data={data}
                total={100}
                rows={18}
                columns={14}
                margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
                colors={{ scheme: 'set1' }}
                borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={11}
                legends={[
                  {
                    anchor: 'top-left',
                    direction: 'column',
                    justify: false,
                    translateX: -100,
                    translateY: 0,
                    itemsSpacing: 4,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    itemTextColor: '#777',
                    symbolSize: 20,
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: '#000',
                          itemBackground: '#f7fafb',
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div class="card mt-4 ml-4 border-success">
          <div class="card-body">
            <h5 class="card-title">Состав программы</h5>
            <p class="card-text">
              Этот график показыват распределение микроэлементов в твоей
              программе.
            </p>
            <div className="container" style={{ height: '400px' }}>
              <ResponsivePie
                data={pieData}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: 'nivo' }}
                borderWidth={2}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                radialLabel={function (e) {
                  return e.id + ' (' + e.value + ')';
                }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                  {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                fill={[
                  {
                    match: {
                      id: 'ruby',
                    },
                    id: 'dots',
                  },
                  {
                    match: {
                      id: 'c',
                    },
                    id: 'dots',
                  },
                  {
                    match: {
                      id: 'go',
                    },
                    id: 'dots',
                  },
                  {
                    match: {
                      id: 'python',
                    },
                    id: 'dots',
                  },
                  {
                    match: {
                      id: 'scala',
                    },
                    id: 'lines',
                  },
                  {
                    match: {
                      id: 'lisp',
                    },
                    id: 'lines',
                  },
                  {
                    match: {
                      id: 'elixir',
                    },
                    id: 'lines',
                  },
                  {
                    match: {
                      id: 'javascript',
                    },
                    id: 'lines',
                  },
                ]}
                legends={[
                  {
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: 56,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: '#000',
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientChart;
