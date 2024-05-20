import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux.ts';
import { IServices } from '../../models/models.ts';
import { servicesAPI } from '../../store/actions/servicesService.ts';

const ServiceAdmin: React.FC = () => {
    const dispatch = useAppDispatch();
    const [editingService, setEditingService] = useState<IServices | null>(null);
    const [newService, setNewService] = useState<IServices>({ name: '' });
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { data: services } = servicesAPI.useFetchAllServicesQuery();
    const [createService] = servicesAPI.useCreateServiceMutation();
    const [updateService] = servicesAPI.useUpdateServiceMutation();
    const [deleteService] = servicesAPI.useDeleteServiceMutation();

    useEffect(() => {
        dispatch(servicesAPI.endpoints.fetchAllServices.initiate());
    }, [dispatch]);

    const handleEdit = (service: IServices) => {
        setEditingService(service);
    };

    const handleSave = () => {
        if (editingService) {
            updateService({ id: editingService.servicesId!, data: editingService });
            setEditingService(null);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editingService) {
            setEditingService({ ...editingService, name: e.target.value });
        } else {
            setNewService({ ...newService, name: e.target.value });
        }
    };


    const handleAddService = () => {
        createService(newService);
        setNewService({ name: '' });
    };

    const handleDelete = (serviceId: number) => {
        deleteService(serviceId);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Управление сервисами</h1>
            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    className="border border-gray-400 px-3 py-2 mr-2 rounded"
                    placeholder="Добавить сервис"
                    value={newService.name}
                    onChange={handleInputChange}
                />
                <button
                    className="bg-blue-500 text-white px-3 py-2 rounded"
                    onClick={handleAddService}
                >
                    Добавить
                </button>
            </div>
            <input
                type="text"
                className="border border-gray-400 px-3 py-2 mb-4 rounded"
                placeholder="Поиск по названию..."
                onChange={handleSearch}
                value={searchTerm}
            />
            <table className="w-full border-collapse border">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border p-2">Название</th>
                    <th className="border p-2">Действия</th>
                </tr>
                </thead>
                <tbody>
                {services
                    ?.filter((service: IServices) =>
                        service.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((service: IServices) => (
                        <tr key={service.servicesId}>
                            <td className="border p-2">
                                {editingService?.servicesId === service.servicesId ? (
                                    <input
                                        type="text"
                                        value={editingService?.name}
                                        onChange={(e) => handleInputChange(e)}
                                    />
                                ) : (
                                    service.name
                                )}
                            </td>
                            <td className="border p-2">
                                {editingService?.servicesId === service.servicesId ? (
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
                                            onClick={() => handleEdit(service)}
                                        >
                                            Редактировать
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                            onClick={() => handleDelete(service.servicesId!)}
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

export default ServiceAdmin;
