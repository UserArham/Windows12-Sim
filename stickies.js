export function StickyNotes() {
  const ta = document.createElement('textarea');
  const key = 'stickyNote';
  ta.value = localStorage.getItem(key) || '';
  ta.oninput = () => localStorage.setItem(key, ta.value);
  return ta;
}
