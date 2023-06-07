export default function List({ people }) {
  const res = people.map((p) => (
    <div className="person" style={{ padding: "10px" }} key={p.name}>
      <img src={p.image} alt={p.name} />
      <div>
        <h4>{p.name}</h4>
        <p>years Of {p.age}</p>
      </div>
    </div>
  ));
  return res;
}
