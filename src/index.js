import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import './font/stylesheet.css';

function Header (props){
    return (
        <header>
            <div className="header">
                <div className="header-top-container">
                    <div className="header-top">
                        <div className="header-top-left">
                            <ul>
                                <li><a href="">О Нас</a></li>
                                <li><a href="">Оплата и доставка</a></li>
                                <li><a href="">Новости</a></li>
                                <li><a href="">Контакты</a></li>
                            </ul>
                        </div>
                        <div className="header-top-right">
                            <div className="header-top-right-area">
                                <a href=""><img src="img/Личный_кабинет.png" alt="Иконка личного кабинета" className="header-top-right-area-img"/>Личный кабинет</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-center-container">
                    <div className="header-center">
                        <div className="header-center-logo"><a href=""><img src="img/Логотип.png" alt="Logo"/></a></div>
                        <div className="header-center-search">
                            <form>
                                <input type="text" placeholder="Поиск"/>
                            </form>
                        </div>
                        <div className="header-center-list">
                            <ul>
                                <li><a href="">Город</a></li>
                                <li><a href=""><div><p>8-800-777-49-67</p><p className="header-center-list-call">Заказать звонок</p></div></a></li>
                                <li><a href=""></a></li>
                            </ul>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="header-bot-container">
                    <div className="header-bot">
                        <div><a href="">Каталог ножей</a></div>
                        <div><a href="">Клинковое оружие</a></div>
                        <div><a href="">Сувенирные изделия</a></div>
                        <div><a href="">Фонари ARMYTEK</a></div>
                        <div><a href="">Сопуствующие товары</a></div>
                    </div>
                </div>
            </div>
        </header>
    );
}
function Footer(props){
    return(
        <footer>
            <div>
                <div>
                    <p>Златоустовские ножи интернет-магазин "ЗЛАТМАКС"</p>
                </div>
                <div>
                    <p>Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого качества из города оружейников - Златоуста. Златоустовские ножи известны и популярны среди потребителей как на российским рынке, так и за рубежом: ножи охотничьи, хозяйственные, туристические, рыбацкие, складные и метательные. Нож Златоуста - это идеальный друг и товарищ в повседневной жизни и в экстремальных ситуациях. На многую продукцию распространяется гарантия до 10 лет - это один из главных показателей качества. Для Вас на нашем сайте "zlatmax" предложен огромный ассортимент Златоустовских ножей. Наши менеджеры помогут определиться и подобрать самый лучший Златоустовский нож, ориентируясь на Ваши пожелания.</p>
                </div>
            </div>
            <div>
                <div>
                    <ul>
                        <p>Информация</p>
                        <li><a href="">Златоусовские ножи в Москве и Московской области</a></li>
                        <li><a href="">Ножевые стали</a></li>
                        <li><a href="">О нас</a></li>
                        <li><a href="">Условия оплаты и доставки</a></li>
                        <li><a href="">Политика конфиденциальности</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>Служба поддержки</p>
                        <li><a href="">Контактная информация</a></li>
                        <li><a href="">Возврат товара</a></li>
                        <li><a href="">Карта сайта</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>Дополнительно</p>
                        <li><a href="">Подарочные сертификаты</a></li>
                        <li><a href="">Партнеры</a></li>
                        <li><a href="">Товары со скидкой</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>Личный кабинет</p>
                        <li><a href="">Личный кабинет</a></li>
                        <li><a href="">История заказов</a></li>
                        <li><a href="">Мои закладки</a></li>
                        <li><a href="">Рассылка новостей</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <ul>
                        <p></p>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                    </ul>
                    <div><a href=""></a><a href=""></a><a href=""></a><a href=""></a>img</div>
                </div>
                <div>
                    <ul>
                        <p>ПОЛЕЗНЫЕ ССЫЛКИ</p>
                        <li><a>Способы оплаты и доставки</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>НАША ГАРАНТИЯ</p>
                        <li>Недовольны своей покупкой?
                            Вы можете вернуть ее в течении
                            30 дней с даты получения,
                            согласно <a>нашим правилам</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p> НОВОСТНАЯ РАССЫЛКА</p>
                        <li><a>Подпишитесь прямо сейчас!</a></li>
                    </ul>
                    <form>
                        <input type="text" placeholder="example@gmail.com"/>
                        <button type="submit"></button>
                        <input type="checked"/>
                        <p>я прочитал Условия соглашения и согласен с условиями</p>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <p>Все материалы, размещенные на сайте, носят справочный характер и не являются
                        публичной офертой, определяемойположениями Статьи 437 Гражданского кодекса Российской Федерации.
                        При копировании материалов гиперссылка на www.zlatmax.ru обязательна!</p>
                </div>
                <div>
                    <p>Златоустовские ножи www.zlatmax.ru ©</p>
                </div>
            </div>
        </footer>
    );
}

function Catalogs(props){
    const {img, titular,a1, a2, a3, className } = props;
    return(
        <div className="catalogs-block">
            <div className="catalogs-block-left">
                <div className="catalogs-block-titular">
                    <h3>
                        {titular}
                    </h3>
                </div>
                <div className="catalogs-block-table">
                    <ul>
                        <li><a href={a1}>Разделочные</a></li>
                        <li><a href={a2}>Туристические</a></li>
                        <li><a href={a3}>Охотничьи</a></li>
                    </ul>
                </div>
            </div>
            <div className="catalogs-block-right">
                <img src={img} className={className}/>
            </div>
        </div>
    );
}

function ProductItem(props){
    const {img, name, dimensions, material, reviews, cost} = props;
    return(
        <div>
            <div>
                <img src={img}/>
            </div>
            <div>
                <div>
                    <p>{name}</p>
                    <p>{dimensions}</p>
                    {/*Звезды*/}
                </div>
                <div>
                    <p>{material}</p>
                    <p>{reviews}</p>
                </div>
            </div>
            <div>
                <div>
                    <div>{cost}</div>
                    <div>{/*Сравнение, избранное*/}</div>
                </div>
                <div>
                    <button>
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
}

function HomeCatalog(props){
    return(
        <div className="container">
            <Header />
            <div className="greeting-container">
                <div className="greetings-block">
                    <div className="greetings-block-top">
                        <div className="greetings-block-top-left">
                            <div>
                                <h1>Интернет магазин сертифицированных</h1>
                                <h2>златоустовских ножей</h2>
                                <div className="greetings-top-left-text">
                                    <p className="greetings-block-text-top">Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине</p>
                                    <p className="greetings-block-text-center">представлен наиболее широкий выбор Златоустовских ножей от Златоустовских</p>
                                    <p className="greetings-block-text-bot">Оружейных Фабрик и компаний, мы являемся официальными поставщиками.</p>
                                </div>
                            </div>
                            <div className="greetings-top-left-button">
                                <button className="button-more">Подробнее</button>
                            </div>
                        </div>
                        <div className="greetings-block-top-right">
                            <img src="img/HomeCatalog.png"/>
                        </div>
                    </div>
                    <div className="greetings-block-bot">
                        <div>
                            <img src="" alt=""/>
                            <p>Гарантия 100% возврата
                                денежных средств</p>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <p>Доставка по России,
                                Казахстану и Белоруссии</p>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <p>Возможность оформление
                                заказа без регистрации.</p>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <p>Скидки постоянным
                                покупателям. </p>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div>
                    <Catalogs titulat="Каталог ножей"/>
                    <Catalogs titulat="Среднеклинковое оружие"/>
                    <Catalogs titulat="Длинноклинковое оружие"/>
                    <Catalogs titulat="Сувенирные изделия"/>
                    <Catalogs titulat="Сопутствующие товары"/>
                    <Catalogs titulat="Ножевая мастерская"/>
                </div>
            </section>
            <Footer />
        </div>
    );
}

ReactDOM.render(<HomeCatalog/>, document.getElementById('root'));