import React, { useState } from 'react';
import { Plus, ShoppingBag, Layers, Eye, Users, X, Trash2, ArrowLeft, Upload, Edit2, Save } from 'lucide-react';

// Main App Component
const MarwadiDressApp = () => {
  const [products, setProducts] = useState([]);
  const [currentView, setCurrentView] = useState('list'); // 'list', 'add', 'detail', 'edit'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
    setCurrentView('list');
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    setCurrentView('list');
    setEditingProduct(null);
  };

  const viewProduct = (product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
  };

  const editProduct = (product) => {
    setEditingProduct(product);
    setCurrentView('edit');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-900 via-red-800 to-orange-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-8 h-8 text-amber-300" />
              <div>
                <h1 className="text-3xl font-bold tracking-wide">Marwadi Traditional Collection</h1>
                <p className="text-amber-200 text-sm mt-1">Premium Ethnic Wear Management</p>
              </div>
            </div>
            {currentView === 'list' && (
              <button
                onClick={() => setCurrentView('add')}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Plus className="w-5 h-5" />
                Add New Product
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'list' && (
          <ProductList products={products} onViewProduct={viewProduct} onEditProduct={editProduct} />
        )}
        {currentView === 'add' && (
          <AddProductForm onAddProduct={addProduct} onCancel={() => setCurrentView('list')} />
        )}
        {currentView === 'edit' && (
          <EditProductForm 
            product={editingProduct} 
            onUpdateProduct={updateProduct} 
            onCancel={() => setCurrentView('list')} 
          />
        )}
        {currentView === 'detail' && (
          <ProductDetails 
            product={selectedProduct} 
            onBack={() => setCurrentView('list')} 
            onEdit={() => editProduct(selectedProduct)}
          />
        )}
      </main>
    </div>
  );
};

// Add Product Form Component
const AddProductForm = ({ onAddProduct, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Men',
    category: 'Kurta',
    description: '',
    images: [''],
    sizes: []
  });

  const categories = {
    Men: ['Kurta', 'Sherwani', 'Paghdi', 'Dhoti', 'Nehru Jacket'],
    Women: ['Lehenga', 'Ghagra', 'Dupatta', 'Kurti', 'Saree', 'Choli'],
    Kids: ['Kurta', 'Lehenga', 'Ethnic Dress', 'Sherwani']
  };

  const addSize = () => {
    setFormData({
      ...formData,
      sizes: [...formData.sizes, { size: 'M', variations: [] }]
    });
  };

  const removeSize = (index) => {
    const newSizes = formData.sizes.filter((_, i) => i !== index);
    setFormData({ ...formData, sizes: newSizes });
  };

  const addVariation = (sizeIndex) => {
    const newSizes = [...formData.sizes];
    newSizes[sizeIndex].variations.push({
      color: '',
      fabric: '',
      price: '',
      stock: ''
    });
    setFormData({ ...formData, sizes: newSizes });
  };

  const removeVariation = (sizeIndex, varIndex) => {
    const newSizes = [...formData.sizes];
    newSizes[sizeIndex].variations = newSizes[sizeIndex].variations.filter((_, i) => i !== varIndex);
    setFormData({ ...formData, sizes: newSizes });
  };

  const updateSize = (index, value) => {
    const newSizes = [...formData.sizes];
    newSizes[index].size = value;
    setFormData({ ...formData, sizes: newSizes });
  };

  const updateVariation = (sizeIndex, varIndex, field, value) => {
    const newSizes = [...formData.sizes];
    newSizes[sizeIndex].variations[varIndex][field] = value;
    setFormData({ ...formData, sizes: newSizes });
  };

  const addImageField = () => {
    setFormData({ ...formData, images: [...formData.images, ''] });
  };

  const updateImage = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData({ ...formData, images: newImages });
  };

  const handleSubmit = () => {
    onAddProduct(formData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-red-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-red-900 flex items-center gap-3">
          <Layers className="w-8 h-8 text-amber-600" />
          Add New Product
        </h2>
        <button onClick={onCancel} className="text-gray-500 hover:text-red-800 transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-8">
        {/* Basic Details */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
          <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Basic Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all"
                placeholder="e.g., Royal Marwadi Sherwani"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value, category: categories[e.target.value][0] })}
                className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all"
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all"
              >
                {categories[formData.gender].map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
                className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all"
                placeholder="Describe the product features and details..."
              />
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
          <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Product Images
          </h3>
          {formData.images.map((img, index) => (
            <div key={index} className="mb-3">
              <input
                type="url"
                value={img}
                onChange={(e) => updateImage(index, e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                placeholder="Enter image URL"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addImageField}
            className="mt-2 flex items-center gap-2 text-amber-700 hover:text-amber-900 font-semibold transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add More Images
          </button>
        </div>

        {/* Size & Variations */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-red-900 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              Size & Variations
            </h3>
            <button
              type="button"
              onClick={addSize}
              className="flex items-center gap-2 bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <Plus className="w-4 h-4" />
              Add Size
            </button>
          </div>

          {formData.sizes.map((sizeData, sizeIndex) => (
            <div key={sizeIndex} className="mb-6 bg-white p-5 rounded-xl border-2 border-red-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 flex-1">
                  <label className="font-semibold text-gray-700">Size:</label>
                  <select
                    value={sizeData.size}
                    onChange={(e) => updateSize(sizeIndex, e.target.value)}
                    className="px-4 py-2 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-800 transition-all"
                  >
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => removeSize(sizeIndex)}
                  className="text-red-600 hover:text-red-800 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              {sizeData.variations.map((variation, varIndex) => (
                <div key={varIndex} className="mb-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-amber-900">Variation {varIndex + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeVariation(sizeIndex, varIndex)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Color (e.g., Maroon)"
                      value={variation.color}
                      onChange={(e) => updateVariation(sizeIndex, varIndex, 'color', e.target.value)}
                      className="px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-600 transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Fabric (e.g., Silk)"
                      value={variation.fabric}
                      onChange={(e) => updateVariation(sizeIndex, varIndex, 'fabric', e.target.value)}
                      className="px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-600 transition-all"
                    />
                    <input
                      type="number"
                      placeholder="Price (₹)"
                      value={variation.price}
                      onChange={(e) => updateVariation(sizeIndex, varIndex, 'price', e.target.value)}
                      className="px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-600 transition-all"
                    />
                    <input
                      type="number"
                      placeholder="Stock"
                      value={variation.stock}
                      onChange={(e) => updateVariation(sizeIndex, varIndex, 'stock', e.target.value)}
                      className="px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-600 transition-all"
                    />
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => addVariation(sizeIndex)}
                className="mt-2 flex items-center gap-2 text-red-800 hover:text-red-900 font-semibold transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Variation to {sizeData.size}
              </button>
            </div>
          ))}
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4 justify-end pt-4 border-t-2 border-gray-200">
          <button
            onClick={onCancel}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-gradient-to-r from-red-800 to-orange-800 hover:from-red-900 hover:to-orange-900 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

// Edit Product Form Component
const EditProductForm = ({ product, onUpdateProduct, onCancel }) => {
  const [formData, setFormData] = useState({ ...product });

  const categories = {
    Men: ['Kurta', 'Sherwani', 'Paghdi', 'Dhoti', 'Nehru Jacket'],
    Women: ['Lehenga', 'Ghagra', 'Dupatta', 'Kurti', 'Saree', 'Choli'],
    Kids: ['Kurta', 'Lehenga', 'Ethnic Dress', 'Sherwani']
  };

  const addSize = () => {
    setFormData({
      ...formData,
      sizes: [...formData.sizes, { size: 'M', variations: [] }]
    });
  };

  const removeSize = (index) => {
    const newSizes = formData.sizes.filter((_, i) => i !== index);
    setFormData({ ...formData, sizes: newSizes });
  };

  const addVariation = (sizeIndex) => {
    const newSizes = [...formData.sizes];
    newSizes[sizeIndex].variations.push({
      color: '',
      fabric: '',
      price: '',
      stock: ''
    });
    setFormData({ ...formData, sizes: newSizes });
  };

  const removeVariation = (sizeIndex, varIndex) => {
    const newSizes = [...formData.sizes];
    newSizes[sizeIndex].variations = newSizes[sizeIndex].variations.filter((_, i) => i !== varIndex);
    setFormData({ ...formData, sizes: newSizes });
  };

  const updateSize = (index, value) => {
    const newSizes = [...formData.sizes];
    newSizes[index].size = value;
    setFormData({ ...formData, sizes: newSizes });
  };

  const updateVariation = (sizeIndex, varIndex, field, value) => {
    const newSizes = [...formData.sizes];
    newSizes[sizeIndex].variations[varIndex][field] = value;
    setFormData({ ...formData, sizes: newSizes });
  };

  const addImageField = () => {
    setFormData({ ...formData, images: [...formData.images, ''] });
  };

  const updateImage = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData({ ...formData, images: newImages });
  };

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages.length > 0 ? newImages : [''] });
  };

  const handleSubmit = () => {
    onUpdateProduct(formData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-amber-600">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-red-900 flex items-center gap-3">
          <Edit2 className="w-8 h-8 text-amber-600" />
          Edit Product
        </h2>
        <button onClick={onCancel} className="text-gray-500 hover:text-red-800 transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-8">
        {/* Basic Details */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
          <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Basic Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all"
                placeholder="e.g., Royal Marwadi Sherwani"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value, category: categories[e.target.value][0] })}
                className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all"
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all"
              >
                {categories[formData.gender].map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
                className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all"
                placeholder="Describe the product features and details..."
              />
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
          <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Product Images
          </h3>
          {formData.images.map((img, index) => (
            <div key={index} className="mb-3 flex gap-2">
              <input
                type="url"
                value={img}
                onChange={(e) => updateImage(index, e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                placeholder="Enter image URL"
              />
              {formData.images.length > 1 && (
                <button
                  onClick={() => removeImage(index)}
                  className="px-3 text-red-600 hover:text-red-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
          <button
            onClick={addImageField}
            className="mt-2 flex items-center gap-2 text-amber-700 hover:text-amber-900 font-semibold transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add More Images
          </button>
        </div>

        {/* Size & Variations */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-red-900 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              Size & Variations
            </h3>
            <button
              onClick={addSize}
              className="flex items-center gap-2 bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <Plus className="w-4 h-4" />
              Add Size
            </button>
          </div>

          {formData.sizes.map((sizeData, sizeIndex) => (
            <div key={sizeIndex} className="mb-6 bg-white p-5 rounded-xl border-2 border-red-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 flex-1">
                  <label className="font-semibold text-gray-700">Size:</label>
                  <select
                    value={sizeData.size}
                    onChange={(e) => updateSize(sizeIndex, e.target.value)}
                    className="px-4 py-2 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-800 transition-all"
                  >
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
                <button
                  onClick={() => removeSize(sizeIndex)}
                  className="text-red-600 hover:text-red-800 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              {sizeData.variations.map((variation, varIndex) => (
                <div key={varIndex} className="mb-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-amber-900">Variation {varIndex + 1}</span>
                    <button
                      onClick={() => removeVariation(sizeIndex, varIndex)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Color (e.g., Maroon)"
                      value={variation.color}
                      onChange={(e) => updateVariation(sizeIndex, varIndex, 'color', e.target.value)}
                      className="px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-600 transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Fabric (e.g., Silk)"
                      value={variation.fabric}
                      onChange={(e) => updateVariation(sizeIndex, varIndex, 'fabric', e.target.value)}
                      className="px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-600 transition-all"
                    />
                    <input
                      type="number"
                      placeholder="Price (₹)"
                      value={variation.price}
                      onChange={(e) => updateVariation(sizeIndex, varIndex, 'price', e.target.value)}
                      className="px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-600 transition-all"
                    />
                    <input
                      type="number"
                      placeholder="Stock"
                      value={variation.stock}
                      onChange={(e) => updateVariation(sizeIndex, varIndex, 'stock', e.target.value)}
                      className="px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-600 transition-all"
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={() => addVariation(sizeIndex)}
                className="mt-2 flex items-center gap-2 text-red-800 hover:text-red-900 font-semibold transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Variation to {sizeData.size}
              </button>
            </div>
          ))}
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4 justify-end pt-4 border-t-2 border-gray-200">
          <button
            onClick={onCancel}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
};

// Product List Component
const ProductList = ({ products, onViewProduct, onEditProduct }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <ShoppingBag className="w-20 h-20 text-red-300 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-600 mb-2">No Products Yet</h3>
        <p className="text-gray-500">Start by adding your first traditional dress product</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onViewProduct={onViewProduct} onEditProduct={onEditProduct} />
      ))}
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, onViewProduct, onEditProduct }) => {
  const getLowestPrice = () => {
    let lowest = Infinity;
    product.sizes.forEach(size => {
      size.variations.forEach(v => {
        if (v.price && parseFloat(v.price) < lowest) {
          lowest = parseFloat(v.price);
        }
      });
    });
    return lowest === Infinity ? 0 : lowest;
  };

  const genderColors = {
    Men: 'bg-blue-100 text-blue-800 border-blue-300',
    Women: 'bg-pink-100 text-pink-800 border-pink-300',
    Kids: 'bg-green-100 text-green-800 border-green-300'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-red-100 transform hover:scale-105">
      <div className="relative h-64 bg-gradient-to-br from-red-100 to-orange-100 overflow-hidden">
        {product.images[0] ? (
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => e.target.style.display = 'none'}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <ShoppingBag className="w-20 h-20 text-red-300" />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${genderColors[product.gender]}`}>
            {product.gender}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEditProduct(product);
            }}
            className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
            title="Edit Product"
          >
            <Edit2 className="w-4 h-4 text-amber-700" />
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-red-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-amber-700 font-semibold mb-3 flex items-center gap-2">
          <Layers className="w-4 h-4" />
          {product.category}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-sm text-gray-500 block">Starting from</span>
            <span className="text-2xl font-bold text-red-900">₹{getLowestPrice().toLocaleString()}</span>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500 block">Sizes</span>
            <span className="text-lg font-bold text-gray-700">{product.sizes.length}</span>
          </div>
        </div>
        <button
          onClick={() => onViewProduct(product)}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-800 to-orange-800 hover:from-red-900 hover:to-orange-900 text-white py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
        >
          <Eye className="w-5 h-5" />
          View Details
        </button>
      </div>
    </div>
  );
};

// Product Details Component
const ProductDetails = ({ product, onBack, onEdit }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.size || '');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const getVariationsForSize = () => {
    const sizeData = product.sizes.find(s => s.size === selectedSize);
    return sizeData?.variations || [];
  };

  const genderIcons = {
    Men: '👔',
    Women: '👗',
    Kids: '🧒'
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-red-800">
      <div className="bg-gradient-to-r from-red-900 to-orange-900 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </button>
          <button
            onClick={onEdit}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            <Edit2 className="w-4 h-4" />
            Edit Product
          </button>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <div className="flex items-center gap-4 text-amber-200">
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {product.gender}
              </span>
              <span className="flex items-center gap-2">
                <Layers className="w-5 h-5" />
                {product.category}
              </span>
            </div>
          </div>
          <span className="text-5xl">{genderIcons[product.gender]}</span>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 mb-4 h-96 flex items-center justify-center overflow-hidden">
              {product.images[selectedImageIndex] ? (
                <img
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onError={(e) => e.target.style.display = 'none'}
                />
              ) : (
                <ShoppingBag className="w-32 h-32 text-red-300" />
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-3 transition-all ${
                      selectedImageIndex === index ? 'border-red-800 shadow-lg' : 'border-gray-200'
                    }`}
                  >
                    {img ? (
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <ShoppingBag className="w-8 h-8 text-gray-300" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-700 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description || 'No description available.'}</p>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-700 mb-3">Select Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sizeData) => (
                  <button
                    key={sizeData.size}
                    onClick={() => setSelectedSize(sizeData.size)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all border-2 ${
                      selectedSize === sizeData.size
                        ? 'bg-red-800 text-white border-red-800 shadow-lg'
                        : 'bg-white text-gray-700 border-red-200 hover:border-red-800'
                    }`}
                  >
                    {sizeData.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Variations */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-3">
                Available Variations ({selectedSize})
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {getVariationsForSize().map((variation, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border-2 border-amber-200"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-xs text-gray-600 font-semibold block mb-1">Color</span>
                        <span className="text-sm font-bold text-red-900">{variation.color || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-600 font-semibold block mb-1">Fabric</span>
                        <span className="text-sm font-bold text-red-900">{variation.fabric || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-600 font-semibold block mb-1">Price</span>
                        <span className="text-xl font-bold text-green-700">₹{parseFloat(variation.price).toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-600 font-semibold block mb-1">Stock</span>
                        <span className={`text-sm font-bold ${variation.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
                          {variation.stock} units
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {getVariationsForSize().length === 0 && (
                  <p className="text-gray-500 text-center py-8">No variations available for this size.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarwadiDressApp;