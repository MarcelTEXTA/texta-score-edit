import "../sidebar.css"

export default function Property() {
  return (
    <div className="content-page">
      <div>
        <h3>Propriétés</h3>
      </div>
      <select>
        <option>Clé de Sol</option>
        <option>Clé de Fa</option>
      </select>

      <input type="text" placeholder="Tonalité" />
    </div>
  );
}