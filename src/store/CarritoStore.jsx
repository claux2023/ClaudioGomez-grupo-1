import { create } from 'zustand';

const useCarritoStore = create((set) => ({
    productos: [],
    total: 0,
    agregarProducto: (producto) => set((state) => ({ productos: [...state.productos, producto], total: state.total + producto.precio })),
    eliminarProducto: (id) => set((state) => ({ productos: state.productos.filter((p) => p.id !== id), total: state.total - state.productos.find((p) => p.id === id).precio })),
    actualizarCantidad: (id, cantidad) => set((state) => {
        const productosActualizados = state.productos.map((p) => p.id === id ? { ...p, cantidad } : p);
        const totalActualizado = productosActualizados.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
        return { productos: productosActualizados, total: totalActualizado };
    }),
    vaciarCarrito: () => set({ productos: [], total: 0 }),
    }));
    export default useCarritoStore;