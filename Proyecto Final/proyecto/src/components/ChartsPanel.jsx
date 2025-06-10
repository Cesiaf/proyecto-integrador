import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#00C49F",
  "#FFBB28",
];

function ChartsPanel({ productos }) {
  if (!productos.length) return null;

  // Gráfico de barras: cantidad por categoría
  const porCategoria = productos.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  const dataBarras = Object.entries(porCategoria).map(([cat, cantidad]) => ({
    categoria: cat,
    cantidad,
  }));

  // Gráfico de líneas: evolución de precios (simulada por id o índice)
  const dataLineas = productos
    .slice()
    .sort((a, b) => a.id - b.id)
    .map((p, i) => ({
      name: p.title.length > 12 ? p.title.slice(0, 12) + "…" : p.title,
      precio: p.price,
      idx: i + 1,
    }));

  // Pie chart: proporción por stock (alto, medio, bajo)
  const stockData = [
    {
      name: "Stock bajo (≤20)",
      value: productos.filter((p) => p.stock <= 20).length,
    },
    {
      name: "Stock medio (21-50)",
      value: productos.filter((p) => p.stock > 20 && p.stock <= 50).length,
    },
    {
      name: "Stock alto (>50)",
      value: productos.filter((p) => p.stock > 50).length,
    },
  ].filter((d) => d.value > 0);

  return (
    <div className="grid md:grid-cols-3 gap-8 my-8">
      {/* Gráfico de barras */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow">
        <h2 className="font-bold mb-2 text-center text-indigo-700 dark:text-indigo-200 text-sm">
          Cantidad por Categoría
        </h2>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={dataBarras}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="categoria" fontSize={12} />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Gráfico de líneas */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow">
        <h2 className="font-bold mb-2 text-center text-indigo-700 dark:text-indigo-200 text-sm">
          Evolución de Precios
        </h2>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={dataLineas}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              fontSize={10}
              interval={0}
              angle={-30}
              height={60}
            />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="precio" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* Pie chart */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow">
        <h2 className="font-bold mb-2 text-center text-indigo-700 dark:text-indigo-200 text-sm">
          Proporción por Stock
        </h2>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={stockData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={70}
              label
            >
              {stockData.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartsPanel;
