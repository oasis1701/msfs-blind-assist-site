// Fills in the current release and preview build details from GitHub's public
// Releases API. Everything on the page is complete without this script; it only
// adds the version numbers and dates, and does nothing if GitHub cannot be reached.
(function () {
  "use strict";

  var repo = "oasis1701/msfs-blind-assist";

  function show(id, text) {
    var el = document.getElementById(id);
    if (!el || !text) { return; }
    el.textContent = text;
    el.hidden = false;
  }

  function formatDate(iso) {
    if (!iso) { return ""; }
    try {
      return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    } catch (e) {
      return "";
    }
  }

  function get(path) {
    return fetch("https://api.github.com/repos/" + repo + path, { headers: { Accept: "application/vnd.github+json" } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; });
  }

  get("/releases/latest").then(function (rel) {
    if (!rel || !rel.tag_name) { return; }
    var when = formatDate(rel.published_at);
    show("release-version", "Current release: " + rel.tag_name + (when ? ", published " + when : "") + ".");
  });

  // The preview is one release updated in place, so its asset's date is the build date.
  get("/releases/tags/preview").then(function (rel) {
    if (!rel || !rel.name) { return; }
    var asset = rel.assets && rel.assets[0];
    var when = formatDate(asset ? asset.updated_at : rel.published_at);
    show("preview-version", "Current preview: " + rel.name + (when ? ", built " + when : "") + ".");
  });
})();
