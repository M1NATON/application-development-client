import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux.ts';
import { IPortfolio } from '../../models/models.ts';
import { portfolioAPI } from '../../store/actions/portfolioService.ts';

const PortfolioAdmin: React.FC = () => {
    const dispatch = useAppDispatch();
    const [editingPortfolio, setEditingPortfolio] = useState<IPortfolio | null>(null);
    const [newPortfolio, setNewPortfolio] = useState<IPortfolio>({ title: '', description: '', image: '' });
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { data: portfolioList } = portfolioAPI.useFetchAllPortfolioQuery();
    const [createPortfolio] = portfolioAPI.useCreatePortfolioMutation();
    const [updatePortfolio] = portfolioAPI.useUpdatePortfolioMutation();
    const [deletePortfolio] = portfolioAPI.useDeletePortfolioMutation();

    useEffect(() => {
        dispatch(portfolioAPI.endpoints.fetchAllPortfolio.initiate());
    }, [dispatch]);

    const handleEdit = (portfolio: IPortfolio) => {
        setEditingPortfolio(portfolio);
    };

    const handleSave = () => {
        if (editingPortfolio) {
            updatePortfolio({ id: editingPortfolio.portfolioId!, data: editingPortfolio });
            setEditingPortfolio(null);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof IPortfolio) => {
        if (editingPortfolio) {
            setEditingPortfolio({ ...editingPortfolio, [field]: e.target.value });
        } else {
            setNewPortfolio({ ...newPortfolio, [field]: e.target.value });
        }
    };

    const handleAddPortfolio = () => {
        createPortfolio(newPortfolio);
        setNewPortfolio({ title: '', description: '', image: '' });
    };

    const handleDelete = (portfolioId: number) => {
        deletePortfolio(portfolioId);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Управление портфолио</h1>
            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    className="border border-gray-400 px-3 py-2 mr-2 rounded"
                    placeholder="Добавить портфолио"
                    value={newPortfolio.title}
                    onChange={(e) => handleInputChange(e, 'title')}
                />
                <input
                    type="text"
                    className="border border-gray-400 px-3 py-2 mr-2 rounded"
                    placeholder="Описание"
                    value={newPortfolio.description}
                    onChange={(e) => handleInputChange(e, 'description')}
                />
                <input
                    type="text"
                    className="border border-gray-400 px-3 py-2 mr-2 rounded"
                    placeholder="Изображение"
                    value={newPortfolio.image}
                    onChange={(e) => handleInputChange(e, 'image')}
                />
                <button
                    className="bg-blue-500 text-white px-3 py-2 rounded"
                    onClick={handleAddPortfolio}
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
                    <th className="border p-2">Описание</th>
                    <th className="border p-2">Изображение</th>
                    <th className="border p-2">Действия</th>
                </tr>
                </thead>
                <tbody>
                {portfolioList
                    ?.filter((portfolio: IPortfolio) =>
                        portfolio.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((portfolio: IPortfolio) => (
                        <tr key={portfolio.portfolioId}>
                            <td className="border p-2">
                                {editingPortfolio?.portfolioId === portfolio.portfolioId ? (
                                    <input
                                        type="text"
                                        value={editingPortfolio?.title}
                                        onChange={(e) => handleInputChange(e, 'title')}
                                    />
                                ) : (
                                    portfolio.title
                                )}
                            </td>
                            <td className="border p-2">
                                {editingPortfolio?.portfolioId === portfolio.portfolioId ? (
                                    <input
                                        type="text"
                                        value={editingPortfolio?.description}
                                        onChange={(e) => handleInputChange(e, 'description')}
                                    />
                                ) : (
                                    portfolio.description
                                )}
                            </td>
                            <td className="border p-2">
                                {editingPortfolio?.portfolioId === portfolio.portfolioId ? (
                                    <input
                                        type="text"
                                        value={editingPortfolio?.image}
                                        onChange={(e) => handleInputChange(e, 'image')}
                                    />
                                ) : (
                                    portfolio.image
                                )}
                            </td>
                            <td className="border p-2">
                                {editingPortfolio?.portfolioId === portfolio.portfolioId ? (
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
                                            onClick={() => handleEdit(portfolio)}
                                        >
                                            Редактировать
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                            onClick={() => handleDelete(portfolio.portfolioId!)}
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

export default PortfolioAdmin;
