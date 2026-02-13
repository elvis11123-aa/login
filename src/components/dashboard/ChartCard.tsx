import NeuCard from "./NeuCard";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

// 1. Definimos las interfaces para que TypeScript no de errores
interface ChartDataPoint {
  month?: string;
  name?: string;
  value: number;
  prev?: number;
  fill?: string;
}

interface ChartCardProps {
  type: "line" | "bar" | "pie";
  data: ChartDataPoint[]; // Los datos ahora vienen de afuera
}

const ChartCard = ({ type, data }: ChartCardProps) => {
  const titles: Record<string, string> = {
    line: "Tendencia Mensual",
    bar: "Actividad por Departamento",
    pie: "Estado de Proyectos",
  };

  return (
    <NeuCard className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-foreground">{titles[type]}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {type === "line" ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  background: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "var(--radius)" 
                }} 
              />
              <Legend />
              <Line type="monotone" dataKey="value" name="Actual" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="prev" name="Anterior" stroke="hsl(var(--muted-foreground))" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 3 }} />
            </LineChart>
          ) : type === "bar" ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)" }} />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          ) : (
            <PieChart>
              <Pie 
                data={data} 
                cx="50%" 
                cy="50%" 
                outerRadius={80} 
                innerRadius={40} 
                paddingAngle={4} 
                dataKey="value" 
                // Corregimos el error de percent con un valor por defecto
                label={({ name, percent = 0 }) => `${name} ${(percent * 100).toFixed(0)}%`} 
                fontSize={11}
              >
                {data.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={entry.fill || "hsl(var(--primary))"} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </NeuCard>
  );
};

export default ChartCard;