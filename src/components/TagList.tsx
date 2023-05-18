import TagListItem from "./TagListItem";

export default function TagList() {
  return <div style={{ marginBottom: "1rem" }}>
    <span style={{display: "block", fontSize: "1rem"}}>Project shields</span>
    <small style={{display: "block", marginBottom: "0.5rem"}}>Shields are small image indicators, for example your repository stars, watchers, etc.</small>
    <div>
        <button style={{width: "100%", border: "none", borderRadius: "0", background: "rgba(0,0,0,0.2)", fontSize: "0.8rem", padding: "10px"}}>Add new shield</button>
        <TagListItem />
    </div>
  </div>;
}
