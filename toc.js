<script>
  // prepare the array by adding level, ID and parent to each item of the array
  function prepare(array) {
    let idt, level, t;
    for (let i = 0, n = array.length; i < n; i++) {
      t = array[i];
      t.el = t;
      level = parseInt(t.tagName[1], 10);
      t.level = level;
      t.idt = i + 1;

      if (level <= 1) t.parent = 0;
      if (i) {
        if (array[i - 1].level < level) {
          t.parent = array[i - 1].idt;
        } else if (array[i - 1].level == level) {
          t.parent = array[i - 1].parent;
        } else {
          for (let j = i - 1; j >= 0; j--) {
            if (array[j].level == level - 1) {
              t.parent = array[j].idt;
              break;
            }
          }
        }
      }
    }
    return array;
  }

  // transform a flat array in a hierarchical array
  function hierarchical(items) {
    const hashTable = Object.create(null);
    items.forEach(item => hashTable[item.idt] = {
      ...item,
      subitems: []
    });
    const tree = [];
    items.forEach(item => {
      if (item.parent)
        hashTable[item.parent].subitems.push(hashTable[item.idt]);
      else
        tree.push(hashTable[item.idt]);
    });
    return tree;
  }

  // return an UL containing each title in a LI and possibly other items in UL sub-lists.
  function add_list(titles) {
    let li, a, anchor;
    const ol = document.createElement("ol");
    if (titles && titles.length) {
      for (t of titles) {
        anchor = make_slug(t.el.textContent);
        if (!anchor) anchor = "toc";
        anchor = anchor.replace(/\W/g, "");
        t.el.id = anchor;
        li = document.createElement("li");
        a = document.createElement("a");
        a.href = `#${anchor}`;
        a.innerHTML = t.el.textContent;
        li.append(a);
        if (t.subitems && t.subitems.length) {
          li.append(add_list(t.subitems));
        }
        ol.append(li);
      }
    }
    return ol;
  }

  function make_slug(str) {
    return str.toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '_');
  }

  //get the toc element
  const divtoc = document.getElementById("toc");

  // get the article element
  const article = document.querySelector(".post-body-artikel");

  function createToc() {
    if (divtoc && article) {
      let titles = article.querySelectorAll("h2, h3, h4, h5, h6");
      titles = prepare(titles);
      titles = hierarchical(titles);
      const ol_racine = add_list(titles);
      divtoc.append(ol_racine);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    createToc();
  });
</script>
