import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux.ts';
import { IOrder } from '../../models/models.ts';
import { orderAPI } from '../../store/actions/orderService.ts';

const OrderAdmin: React.FC = () => {
    const dispatch = useAppDispatch();
    const [editingOrder, setEditingOrder] = useState<IOrder | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { data: orders } = orderAPI.useGetAllOrdersQuery();
    const [updateOrder] = orderAPI.useUpdateOrderMutation();
    const [deleteOrder] = orderAPI.useDeleteOrderMutation();

    useEffect(() => {
        dispatch(orderAPI.endpoints.getAllOrders.initiate());
    }, [dispatch]);

    const handleEdit = (order: IOrder) => {
        setEditingOrder(order);
    };

    const handleSave = () => {
        if (editingOrder) {
            updateOrder({ id: editingOrder.orderId!, data: editingOrder });
            setEditingOrder(null);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: keyof IOrder) => {
        if (editingOrder) {
            setEditingOrder({ ...editingOrder, [field]: e.target.value });
        }
    };

    const handleDelete = (orderId: number) => {
        deleteOrder(orderId);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Управление заказами</h1>
            <input
                type="text"
                className="border border-gray-400 px-3 py-2 mb-4 rounded"
                placeholder="Поиск по номеру..."
                onChange={handleSearch}
                value={searchTerm}
            />
            <table className="w-full border-collapse border">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border p-2">Номер заказа</th>
                    <th className="border p-2">Бюджет</th>
                    <th className="border p-2">Номер</th>
                    <th className="border p-2">Описание</th>
                    <th className="border p-2">Статус</th>
                    <th className="border p-2">Действия</th>
                </tr>
                </thead>
                <tbody>
                {orders
                    ?.filter((order: IOrder) =>
                        order.number.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((order: IOrder) => (
                        <tr key={order.orderId}>
                            <td className="border p-2">
                                {editingOrder?.orderId === order.orderId ? (
                                    <input
                                        type="text"
                                        value={editingOrder?.orderId}
                                        onChange={(e) => handleInputChange(e, 'orderId')}
                                    />
                                ) : (
                                    order.orderId
                                )}
                            </td>
                            <td className="border p-2">
                                {editingOrder?.orderId === order.orderId ? (
                                    <input
                                        type="text"
                                        value={editingOrder?.budget}
                                        onChange={(e) => handleInputChange(e, 'budget')}
                                    />
                                ) : (
                                    order.budget
                                )}
                            </td>
                            <td className="border p-2">
                                {editingOrder?.orderId === order.orderId ? (
                                    <input
                                        type="text"
                                        value={editingOrder?.number}
                                        onChange={(e) => handleInputChange(e, 'number')}
                                    />
                                ) : (
                                    order.number
                                )}
                            </td>
                            <td className="border p-2">
                                {editingOrder?.orderId === order.orderId ? (
                                    <input
                                        type="text"
                                        value={editingOrder?.description}
                                        onChange={(e) => handleInputChange(e, 'description')}
                                    />
                                ) : (
                                    order.description
                                )}
                            </td>
                            <td className="border p-2">
                                {editingOrder?.orderId === order.orderId ? (
                                    <select
                                        value={editingOrder?.status}
                                        onChange={(e) => handleInputChange(e, 'status')}
                                    >
                                        <option value="В обработке">В обработке</option>
                                        <option value="В процессе">В процессе</option>
                                        <option value="Готова">Готова</option>
                                    </select>
                                ) : (
                                    order.status
                                )}
                            </td>
                            <td className="border p-2">
                                {editingOrder?.orderId === order.orderId ? (
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                        onClick={handleSave}
                                    >
                                        Сохранить
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                                            onClick={() => handleEdit(order)}
                                        >
                                            Редактировать
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                            onClick={() => handleDelete(order.orderId!)}
                                        >
                                            Удалить
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderAdmin;
