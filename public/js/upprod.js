<script>
document.addEventListener('DOMContentLoaded', function() {
    const product = JSON.parse('<%= JSON.stringify(product) %>');
    document.getElementById('name').value = product.name;
    document.getElementById('price').value = product.price;
    document.getElementById('updateForm').action = '/admin/products/update/' + product.id;
});
</script>