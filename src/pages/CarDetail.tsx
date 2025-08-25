import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const car = cars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Car not found</h2>
        <Link to="/cars" className="text-primary underline">Back to Cars</Link>
      </div>
    );
  }

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <img src={car.image} alt={car.name} className="w-full h-72 object-contain mb-8 rounded-lg bg-card" />
        <h2 className="text-4xl font-bold mb-2">{car.name}</h2>
        <p className="text-muted-foreground mb-6">{car.description}</p>
        <h3 className="text-2xl font-semibold mb-2">History</h3>
        <p className="mb-6">{car.history}</p>
        <h3 className="text-2xl font-semibold mb-2">Current Models & Prices</h3>
        <table className="w-full mb-8 border rounded-lg overflow-hidden">
          <thead className="bg-card">
            <tr>
              <th className="py-2 px-4 text-left">Model</th>
              <th className="py-2 px-4 text-left">Year</th>
              <th className="py-2 px-4 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {car.models.map(model => (
              <tr key={model.name} className="border-t">
                <td className="py-2 px-4">{model.name}</td>
                <td className="py-2 px-4">{model.year}</td>
                <td className="py-2 px-4">{model.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/cars" className="px-4 py-2 rounded bg-secondary text-secondary-foreground font-bold">Back to Cars</Link>
      </div>
    </section>
  );
};

export default CarDetail;
