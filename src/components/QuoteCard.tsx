import React, {useEffect, useState} from 'react';
import {IQuote} from "../models/models";
import {useNavigate} from "react-router-dom";
import {DislikeOutlined, LikeOutlined} from "@ant-design/icons";

interface QuoteCardProps {
    quote: IQuote
}

function QuoteCard({ quote }: QuoteCardProps) {
    const navigate = useNavigate();

    const [likes, setLikes] = useState(0);

    const [isLiked, setIsLiked] = useState(false);

    const [isDisliked, setIsDisliked] = useState(false);

    // Получаем текущее значение лайков из локального хранилища при загрузке компонента
    useEffect(() => {
        const storedLikes = localStorage.getItem(`likes-${quote._id}`);
        if (storedLikes) {
            setLikes(Number(storedLikes))
        }
    }, [quote._id]);

    // Обновляем значение лайков при нажатии на кнопку и сохраняем его в локальном хранилище
    const likeHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        if (!isLiked) {
            const newLikes = Math.min(1, likes + 1); // Ограничиваем значение до 1
            setLikes(newLikes);
            localStorage.setItem(`likes-${quote._id}`, String(newLikes));
            setIsLiked(true);
            setIsDisliked(false); // Сбрасываем состояние дизлайка
        } else {
            setLikes(0);
            localStorage.removeItem(`likes-${quote._id}`);
            setIsLiked(false);
        }
    };

    const dislikeHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        if (!isDisliked) {
            const newLikes = Math.max(-1, likes - 1); // Ограничиваем значение до -1
            setLikes(newLikes);
            localStorage.setItem(`likes-${quote._id}`, String(newLikes));
            setIsLiked(false); // Сбрасываем состояние лайка
            setIsDisliked(true);
        } else {
            setLikes(0);
            localStorage.removeItem(`likes-${quote._id}`);
            setIsDisliked(false);
        }
    };

    const clickHandler = () => navigate(`/quote/${quote._id}`);

    return (
        <div className="border rounded-md py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer " onClick={clickHandler}>
            <p className="text-lg font-bold">
                {quote.author}:&nbsp;
            </p>
            {quote.content}
            {quote.tags?.length && <p>Тэги: {quote.tags.join(', ')}</p>}
            <div className="flex justify-items-start text-red-600">
                <LikeOutlined onClick={likeHandler}/> {likes}
            </div>
            <div>
                <DislikeOutlined onClick={dislikeHandler}/>
            </div>
        </div>
    );
}

export default QuoteCard;