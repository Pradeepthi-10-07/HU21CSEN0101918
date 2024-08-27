import React, { useState, useEffect } from 'react';

function AllProducts()  {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [discount, setDiscount] = useState('');
  const [sort, setSort] = useState('price');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        category,
        company,
        rating,
        priceRange,
        discount,
        sort,
        page,
      };
      const response = await axios.get('/api/products', { params });
      setProducts(response.data);
    };
    fetchProducts();
  }, [category, company, rating, priceRange, discount, sort, page]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'category':
        setCategory(value);
        break;
      case 'company':
        setCompany(value);
        break;
      case 'rating':
        setRating(value);
        break;
      case 'priceRange':
        setPriceRange(value);
        break;
      case 'Discount':
        setDiscount(value);
        break;
      default:
        break;
    }
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };
};
    return (
    
    <div container spacing={2}>
      <div item xs={12}>
        <class variant="h4">All Products</class>
      </div>
      <div item xs={12}>
        <div container spacing={2}>
          <div item xs={6}>
            <ProductDetails
              label="Category"
              name="category"
              value={category}
              onChange={handleFilterChange}
            />
          </div>
          <div item xs={6}>
            <ProductDetails
              label="Company"
              name="company"
              value={company}
              onChange={handleFilterChange}
            />
          </div>
          <div item xs={6}>
            <ProductDetails
              label="Rating"
              name="rating"
              value={rating}
              onChange={handleFilterChange}
            />
          </div>
          <div item xs={6}>
            <ProductDetails
              label="Price Range"
              name="priceRange"
              value={priceRange}
              onChange={handleFilterChange}
            />
          </div>
          <div item xs={6}>
            <Select
              label="Discount"
              name="Discount"
              value={discount}
              onChange={handleFilterChange}
            >
              <Item value="">All</Item>
              <Item value="in_stock">In Stock</Item>
              <Item value="out_of_stock">Out of Stock</Item>
            </Select>
          </div>
          <div item xs={6}>
            <Select
              label="Sort By"
              name="sort"
              value={sort}
              onChange={handleSortChange}
            >
              <MenuItem value="price">Price</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="discount">Discount</MenuItem>
            </Select>
          </div>
          <div item xs={6}>
            <Button onClick={handlePageChange}>Next Page</Button>
          </div>
        </div>
      </div>
      <div item xs={12}></div>
        <div container spacing={2}></div>
        {products.map((product) => (
  <div item xs={6} key={product.id}>
    <ProductCard product={product} />
  </div>
  
))}
 </div>
 );

            