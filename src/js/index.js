function search() {
    const { value } = document.getElementById 
    ("searchInput")
   const baseUrl = "https://www.google.com/search?q"
   location.replace(baseUrl + value)
}