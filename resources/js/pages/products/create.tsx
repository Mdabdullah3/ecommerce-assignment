import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { LoaderCircle } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import AppSidebarLayout from '@/layouts/app/app-sidebar-layout';

const CreateProducts = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        price: '',
        image: '',
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('products.store'));
    };

    return (
        <>
            <Head title="Add Product" />

            <div className="max-w-xl mx-auto py-12">
                <h1 className="text-2xl font-semibold text-center mb-6">Add New Product</h1>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md p-6 rounded-xl border">
                    {/* Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name">Product Name</Label>
                        <Input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Enter product name"
                        />
                        <InputError message={errors.name} />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <textarea
                            id="description"
                            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
                            rows={4}
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="Enter product description"
                        />
                        <InputError message={errors.description} />
                    </div>

                    {/* Price */}
                    <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input
                            id="price"
                            type="number"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            placeholder="0.00"
                        />
                        <InputError message={errors.price} />
                    </div>

                    {/* Image URL */}
                    <div className="space-y-2">
                        <Label htmlFor="image">Image URL</Label>
                        <Input
                            id="image"
                            value={data.image}
                            onChange={(e) => setData('image', e.target.value)}
                            placeholder="https://example.com/image.jpg"
                        />
                        <InputError message={errors.image} />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full" disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                        Add Product
                    </Button>
                </form>
            </div>
        </>
    );
};

CreateProducts.layout = (page: React.ReactNode) => (
    <AppSidebarLayout breadcrumbs={[{ title: 'Dashboard', href: '/dashboard' },]}>
        {page}
    </AppSidebarLayout>
);

export default CreateProducts;
