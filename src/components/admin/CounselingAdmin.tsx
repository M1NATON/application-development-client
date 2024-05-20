import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux.ts';
import { ICounseling } from '../../models/models.ts';
import { counselingAPI } from '../../store/actions/counselingService.ts';

const CounselingAdmin: React.FC = () => {
    const dispatch = useAppDispatch();
    const [editingCounseling, setEditingCounseling] = useState<ICounseling | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { data: counselings } = counselingAPI.useGetAllCounselingQuery();
    const [updateCounseling] = counselingAPI.useUpdateCounselingMutation();
    const [deleteCounseling] = counselingAPI.useDeleteCounselingMutation();

    useEffect(() => {
        dispatch(counselingAPI.endpoints.getAllCounseling.initiate());
    }, [dispatch]);

    const handleEdit = (counseling: ICounseling) => {
        setEditingCounseling(counseling);
    };

    const handleSave = () => {
        if (editingCounseling) {
            updateCounseling({ id: editingCounseling.counselingId!, data: editingCounseling });
            setEditingCounseling(null);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof ICounseling) => {
        if (editingCounseling) {
            setEditingCounseling({ ...editingCounseling, [field]: e.target.value });
        }
    };

    const handleDelete = (counselingId: number) => {
        deleteCounseling(counselingId);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Управление консультациями</h1>
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
                    <th className="border p-2">Номер</th>
                    <th className="border p-2">Сообщение</th>
                    <th className="border p-2">Действия</th>
                </tr>
                </thead>
                <tbody>
                {counselings
                    ?.filter((counseling: ICounseling) =>
                        counseling.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((counseling: ICounseling) => (
                        <tr key={counseling.counselingId}>
                            <td className="border p-2">
                                {editingCounseling?.counselingId === counseling.counselingId ? (
                                    <input
                                        type="text"
                                        value={editingCounseling?.name}
                                        onChange={(e) => handleInputChange(e, 'name')}
                                    />
                                ) : (
                                    counseling.name
                                )}
                            </td>
                            <td className="border p-2">{counseling.number}</td>
                            <td className="border p-2">
                                {editingCounseling?.counselingId === counseling.counselingId ? (
                                    <input
                                        type="text"
                                        value={editingCounseling?.message}
                                        onChange={(e) => handleInputChange(e, 'message')}
                                    />
                                ) : (
                                    counseling.message
                                )}
                            </td>
                            <td className="border p-2">
                                {editingCounseling?.counselingId === counseling.counselingId ? (
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
                                            onClick={() => handleEdit(counseling)}
                                        >
                                            Редактировать
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                            onClick={() => handleDelete(counseling.counselingId!)}
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

export default CounselingAdmin;
