const questions = [
    {
        text: 'Как вас зовут?',
        type: 'input',
        id: 'name',
        placeholder: 'Введите Имя'
    },
    {
        text: 'Сколько вам лет?',
        type: 'radio',
        id: 'age',
        options: [
            '14-16 лет',
            '16-49 лет',
            '50+'
        ]
    },
    {
        text: 'Ваш пол?',
        type: 'radio',
        id: 'sex',
        options: [
            'Женский',
            'Мужской',
            'Не хочу отвечать'
        ]
    },
    {
        text: 'Какой у вас вес?',
        type: 'input',
        id: 'weight',
        placeholder: 'Введите ваш вес'
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'A',
        options: [
            {
                text: 'Снижение четкости зрения в темноте',
                value: 1
            },
            {
                text: 'Язвы во рту или герпес',
                value: 2
            },
            {
                text: 'Акне, сыпь или кожные инфекции',
                value: 1
            },
            {
                text: 'Частые простуды или инфекции',
                value: 2
            },
            {
                text: 'Сухая, шелушащаяся кожа',
                value: 1
            },
            {
                text: 'Перхоть или сухая кожа головы',
                value: 1
            },
            {
                text: 'Диарея или мягкие (водянистые) испражнения',
                value: 1
            },
            {
                text: 'Молочница или цистит',
                value: 1
            },
            {
                text: 'Проблемы с зачатием',
                value: 1
            },
            {
                text: 'Плохое заживление ран',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'D',
        options: [
            {
                text: 'Мышечные судороги или боль в мышцах',
                value: 2
            },
            {
                text: 'Боль в костях и пояснице',
                value: 1
            },
            {
                text: 'Кариес или разрушение твердой поверхности зубов',
                value: 1
            },
            {
                text: 'Боль или скованность в суставах',
                value: 2
            },
            {
                text: 'Выпадение волос',
                value: 1
            },
            {
                text: 'Потеря костной массы. Артрит или остеопороз',
                value: 2
            },
            {
                text: 'Частые заболевания',
                value: 1
            },
            {
                text: 'Депрессия',
                value: 1
            },
            {
                text: 'Длительно незаживающие раны',
                value: 1
            },
            {
                text: 'Усталость и утомляемость',
                value: 1,
                addTo: [
                    {
                        id: 'B1',
                        value: 1
                    }
                ]
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'E',
        options: [
            {
                text: 'Слабость после легких упражнений',
                value: 2,
                addTo: [
                    {
                        id: 'B5',
                        value: 1
                    }
                ]
            },
            {
                text: 'Медленное заживление ран',
                value: 1,
                addTo: [
                    {
                        id: 'C',
                        value: 1
                    },
                    {
                        id: 'Cr',
                        value: 1
                    }
                ]
            },
            {
                text: 'Варикозное расширение вен',
                value: 1
            },
            {
                text: 'Частое появление синяков',
                value: 2
            },
            {
                text: 'Плохая эластичность кожи',
                value: 1
            },
            {
                text: 'Потеря мышечного тонуса или мышечная слабость',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'C',
        options: [
            {
                text: 'Частые простуды',
                value: 2
            },
            {
                text: 'Недостаток энергии или необъяснимая усталость',
                value: 1,
                addTo: [
                    {
                        id: 'B3',
                        value: 1
                    },
                    {
                        id: 'B5',
                        value: 1
                    },
                    {
                        id: 'B12',
                        value: 2
                    },
                    {
                        id: 'B9',
                        value: 2
                    }
                ]
            },
            {
                text: 'Кровоточащие десна или отечность десен',
                value: 1
            },
            {
                text: 'Частые инфекции',
                value: 2,
                addTo: [
                    {
                        id: 'O3',
                        value: 1
                    },
                    {
                        id: 'Zn',
                        value: 2
                    },
                    {
                        id: 'Se',
                        value: 2
                    }
                ]
            },
            {
                text: 'Кровоподтеки и синяки',
                value: 1
            },
            {
                text: 'Носовое кровотечение',
                value: 1
            },
            {
                text: 'Медленно заживающие раны',
                value: 1
            },
            {
                text: 'Ожирение',
                value: 1
            },
            {
                text: 'Пурпурные или красные точки на коже (гемангиомы)',
                value: 1
            },
            {
                text: 'Боль в суставах',
                value: 1,
                addTo: [
                    {
                        id: 'Mn',
                        value: 1
                    }
                ]
            },
            {
                text: 'Изменение состояния волос и кожи',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'B1',
        options: [
            {
                text: 'Слабость мышц',
                value: 1
            },
            {
                text: 'Боли в глазах или нечеткое зрение',
                value: 1
            },
            {
                text: 'Раздражительность ',
                value: 1
            },
            {
                text: 'Плохая концентрация',
                value: 1
            },
            {
                text: 'Плохая память',
                value: 1,
                addTo: [
                    {
                        id: 'B3',
                        value: 1
                    }
                ]
            },
            {
                text: 'Боли в животе',
                value: 1,
                addTo: [
                    {
                        id: 'B9',
                        value: 1
                    }
                ]
            },
            {
                text: 'Запоры',
                value: 1
            },
            {
                text: 'Ощущения покалывания и онемение в руках и ногах',
                value: 1
            },
            {
                text: 'Изменение частоты сердечных сокращений',
                value: 1
            },
            {
                text: 'Потеря аппетита',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'B2',
        options: [
            {
                text: 'Чувствительность глаз на яркий свет. Светобоязнь',
                value: 2
            },
            {
                text: 'Воспаленный ярко - красный язык',
                value: 1
            },
            {
                text: 'Тусклые волосы или очаговые выпадения волос',
                value: 1
            },
            {
                text: 'Экзема или дерматит',
                value: 1
            },
            {
                text: 'Утолщение и уплотнение ногтей',
                value: 1
            },
            {
                text: 'Трещинки в уголках рта или на губах',
                value: 1
            },
            {
                text: 'Покраснение глаз, слезотечение, воспаление слизистой оболочки глаза (конъюнктивит)',
                value: 2
            },
            {
                text: 'Катаракта глаз',
                value: 1
            },
            {
                text: 'Слабость, дрожание конечностей, головокружение, плохой сон',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'B3',
        options: [
            {
                text: 'Диарея',
                value: 1
            },
            {
                text: 'Бессонница',
                value: 1
            },
            {
                text: 'Головные боли или мигрени',
                value: 1
            },
            {
                text: 'Тревога или напряжение',
                value: 1
            },
            {
                text: 'Депрессия',
                value: 1
            },
            {
                text: 'Раздражительность',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'B5',
        options: [
            {
                text: 'Мышечные сокращения. Тремор',
                value: 1
            },
            {
                text: 'Судороги или спазмы',
                value: 1
            },
            {
                text: 'Летаргия (болезненное состояние, характеризующееся медлительностью, вялостью, усталостью)',
                value: 1
            },
            {
                text: 'Плохая концентрация , снижение функции запоминания',
                value: 1
            },
            {
                text: 'Ощущение жжения в ногах, покраснения кожи стоп',
                value: 2
            },
            {
                text: 'Тошнота, рвота',
                value: 1,
                addTo: [
                    {
                        id: 'B12',
                        value: 1
                    }
                ]
            },
            {
                text: 'Тревога или напряжение ',
                value: 1
            },
            {
                text: 'Зубной скрежет. Бруксизм',
                value: 1
            },
            {
                text: 'Развитие язвы двенадцатиперстной кишки и различные диспептические расстройства',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'B6',
        options: [
            {
                text: 'Задержка жидкости в организме',
                value: 2
            },
            {
                text: 'Редкие воспоминания о сне',
                value: 2
            },
            {
                text: 'Покалывание и боль в руках и ногах',
                value: 1
            },
            {
                text: 'Депрессия или нервозность',
                value: 1
            },
            {
                text: 'Изменение настроения',
                value: 1
            },
            {
                text: 'Мышечные треморы, судороги или спазмы',
                value: 1
            },
            {
                text: 'Отсутствие энергии ',
                value: 2
            },
            {
                text: 'Ожирение',
                value: 1
            },
            {
                text: 'Высокий уровень гомоцистеина',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'B12',
        options: [
            {
                text: 'Плохое состояние волос',
                value: 1
            },
            {
                text: 'Экзема или дерматит',
                value: 1
            },
            {
                text: 'Чрезмерная чувствительность рта к теплу или холоду',
                value: 1
            },
            {
                text: 'Раздражительность',
                value: 1
            },
            {
                text: 'Тревога или напряжение',
                value: 1
            },
            {
                text: 'Запоры, проблема с пищеварительной системой',
                value: 1
            },
            {
                text: 'Чувствительные или воспаленные мышцы',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'B9',
        options: [
            {
                text: 'Потрескавшиеся губы',
                value: 1
            },
            {
                text: 'Экзема',
                value: 1
            },
            {
                text: 'Преждевременно седина',
                value: 1
            },
            {
                text: 'Плохая память или проблемы с концентрацией',
                value: 1
            },
            {
                text: 'Тревога или напряжение',
                value: 1
            },
            {
                text: 'Депрессивное состояние',
                value: 1
            },
            {
                text: 'Плохой аппетит',
                value: 1
            },
            {
                text: 'Головные боли',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'B7',
        options: [
            {
                text: 'Сухость кожи, себорейный дерматит',
                value: 2
            },
            {
                text: 'Ломкость и выпадение волос',
                value: 2
            },
            {
                text: 'Преждевременная седина',
                value: 2
            },
            {
                text: 'Мышечные боли ',
                value: 2
            },
            {
                text: 'Плохой аппетит или тошнота',
                value: 2
            },
            {
                text: 'Нейросенсорная потеря слуха',
                value: 2
            },
            {
                text: 'Депрессия, беспокойство',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'O3',
        options: [
            {
                text: 'Сухая кожа или экзема',
                value: 2
            },
            {
                text: 'Сухие волосы или перхоть',
                value: 1
            },
            {
                text: 'Чрезмерная жажда или потливость',
                value: 1
            },
            {
                text: 'Задержка жидкости в организме',
                value: 1
            },
            {
                text: 'Плохая память или проблемы с обучением',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'Ca',
        options: [
            {
                text: 'Мышечные спазмы, судороги. Возникновение ночных судорог в икрах или в утреннее время',
                value: 2
            },
            {
                text: 'Нарушение сна',
                value: 2
            },
            {
                text: 'Высокое кровяное давление',
                value: 2
            },
            {
                text: 'Кариес или повреждение эмали зубов',
                value: 2
            },
            {
                text: 'Боль в суставах, воспаление суставов или артрит',
                value: 2
            },
            {
                text: 'Сухость кожи и развитие хронического зуда',
                value: 1
            },
            {
                text: 'Повышенная утомляемость и чувство хронической усталости',
                value: 1
            },
            {
                text: 'Ломкие ногти',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'Mg',
        options: [
            {
                text: 'Мышечные спазмы или судороги',
                value: 2
            },
            {
                text: 'Мышечная слабость или быстрая утомляемость',
                value: 1
            },
            {
                text: 'Бессонница',
                value: 1
            },
            {
                text: 'Высокое кровяное давление. Аритмия, учащенное сердцебиение, боль в груди',
                value: 1
            },
            {
                text: 'Запоры или менструальные спазмы',
                value: 1
            },
            {
                text: 'Быстрая утомляемость',
                value: 1
            },
            {
                text: 'Задержка жидкости в организме',
                value: 1
            },
            {
                text: 'Депрессия или спутанность сознания, нервозность',
                value: 1
            },
            {
                text: 'Пониженная температура',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'Fe',
        options: [
            {
                text: 'Бледная кожа',
                value: 2
            },
            {
                text: 'Атрофия вкусовых рецепторов и болезненность языка',
                value: 2
            },
            {
                text: 'Утомляемость, вялость или слабость',
                value: 2
            },
            {
                text: 'Потеря аппетита или тошнота',
                value: 2
            },
            {
                text: 'Обильные месячные или большая потеря крови',
                value: 2
            },
            {
                text: 'Потеря волос или ломкость ногтей',
                value: 1
            },
            {
                text: 'Низкий иммунитет или анемия',
                value: 1
            },
            {
                text: 'Учащенное сердцебиение, боли в области сердца',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'Zn',
        options: [
            {
                text: 'Растяжки на коже (стрии)',
                value: 2
            },
            {
                text: 'Акне или жирная кожа. Воспалительные кожные заболевания',
                value: 2
            },
            {
                text: 'Сниженная чувствительность к резким запахам',
                value: 2
            },
            {
                text: 'Огромное пристрастие к сладостям, солености или остроте - продукты без вкуса не вызывают аппетита',
                value: 2
            },
            {
                text: 'Белые пятна, более чем на 2 ногтях',
                value: 2
            },
            {
                text: 'Ожирение',
                value: 1
            },
            {
                text: 'Истончение и выпадение волос',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'Mn',
        options: [
            {
                text: 'Боль в коленях',
                value: 2
            },
            {
                text: 'Мышечные спазмы или боли в мышцах',
                value: 2
            },
            {
                text: 'Головокружения',
                value: 2
            },
            {
                text: 'Эпилепсия в анамнезе',
                value: 2
            },
            {
                text: 'Склонность к судорогам и спазмам',
                value: 1
            },
            {
                text: 'Ухудшение памяти и мыслительных процессов',
                value: 1
            },
            {
                text: 'Повышенная утомляемость',
                value: 1
            },
            {
                text: 'Медленный рост ногтей, волос , ухудшение состояний кожного покрова (хронический дерматит)',
                value: 1
            },
            {
                text: 'Нарушения пигментации кожи, витилиго, мелкая чешуйчатая сыпь',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'Se',
        options: [
            {
                text: 'Высокое кровяное давление',
                value: 2
            },
            {
                text: 'Признаки преждевременного старения',
                value: 2
            },
            {
                text: 'Ухудшение зрения или катаракта глаз',
                value: 2
            },
            {
                text: 'Семейный анамнез рака',
                value: 2
            },
            {
                text: 'Мышечная слабость , боль, спазмы',
                value: 1
            },
            {
                text: 'Увеличение веса',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите из списка те симптомы, которые вас беспокоят',
        type: 'checkbox',
        id: 'Cr',
        options: [
            {
                text: 'Чрезмерное или холодное потоотделение',
                value: 2
            },
            {
                text: 'Холодные руки',
                value: 2
            },
            {
                text: 'Потребность в частом приеме пищи',
                value: 2
            },
            {
                text: 'Частые пристрастия к углеводам',
                value: 2
            },
            {
                text: 'Головокружение или раздражительность после 6 часов без приема пищи',
                value: 2
            },
            {
                text: 'Снижение выносливости и потеря мышечной массы',
                value: 1
            },
            {
                text: 'Медленное заживление ран',
                value: 1
            },
            {
                text: 'Нарушение потенции',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите те вопросы, на которые вы можете ответить "Да"',
        type: 'checkbox',
        id: 'add1',
        options: [
            {
                text: 'Вы часто просыпаетесь по утрам с чувством усталости?',
                value: 1
            },
            {
                text: 'Требуется ли вам для пробуждения утром - чашка кофе или чая, сигарета?',
                value: 1
            },
            {
                text: 'Вы пьете чай, кофе, энергетические напитки, добавляете в рацион сахаросодержащие продукты или курите через регулярные промежутки времени в течение дня?',
                value: 1
            },
            {
                text: 'Часто ли вы чувствуете сонливость в течении дня или после приема пищи?',
                value: 1
            },
            {
                text: 'Вы испытываете чувство раздражения, если у вас не было приема пищи более 6 часов?',
                value: 1
            },
            {
                text: 'Вы избегаете физической нагрузки, потому что у вас нет запаса энергии?',
                value: 1
            },
            {
                text: 'Вы иногда теряете концентрацию?',
                value: 1
            },
            {
                text: 'Ваш запас энергии на данное время меньше, чем раньше?',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите те вопросы, на которые вы можете ответить "Да"',
        type: 'checkbox',
        id: 'add2',
        options: [
            {
                text: 'Чувствуете ли вы себя беспокойным во время отдыха?',
                value: 1
            },
            {
                text: 'Ваш рабочий день более продолжительный, чем у большинства людей?',
                value: 1
            },
            {
                text: 'Вы часто пытаетесь выполнить 2 или 3 задачи одновременно?',
                value: 1
            },
            {
                text: 'У вас есть проблемы с засыпанием, беспокойным сном и пробуждением ночью?',
                value: 1
            },
            {
                text: 'У вас часто возникает чувство повышенной раздражительности, если что-то или кто-то задерживает вас?',
                value: 1
            }
        ]
    },
    {
        text: 'Выберите те вопросы, на которые вы можете ответить "Да"',
        type: 'checkbox',
        id: 'add3',
        options: [
            {
                text: 'Вы регулярно занимаетесь активными видами спорта (футбол, теннис, баскетбол и др)?',
                value: 2
            },
            {
                text: 'Занимаетесь ли бегом или другими упражнениями в фитнес-зале не менее 25 минут при показателях пульса выше 120?',
                value: 2
            },
            {
                text: 'На вашей работе много физической нагрузки?',
                value: 2
            },
            {
                text: 'Вы часто ходите на длинные дистанции (в походы, велотуры )?',
                value: 2
            },
            {
                text: 'Увеличивается ли у вас физическая нагрузка при подготовке к спортивным соревнованиям?',
                value: 2
            }
        ]
    },
    {
        text: 'Выберите те вопросы, на которые вы можете ответить "Да"',
        type: 'checkbox',
        id: 'add4',
        options: [
            {
                text: 'У вас в течении года бывает более 3 простудных заболеваний?',
                value: 1
            },
            {
                text: 'Вы тяжело переносите простудные заболевания?',
                value: 1
            },
            {
                text: 'Вы принимаете антибиотики 2 или более раза в течении года?',
                value: 1
            },
            {
                text: 'Есть ли у вас заболевания, такие как экзема, астма или артрит? ',
                value: 1
            },
            {
                text: 'У вас часто бывает молочница или цистит?',
                value: 1
            },
            {
                text: 'Есть ли у вас аллергия?',
                value: 1
            }
        ]
    },
    {
        text: 'Укажите почту, на которую прислать результат тестирования',
        type: 'input',
        id: 'email'
    }
];
const pointsByQs = {
    add1: {
        C: 1,
        B1: 1,
        B2: 1,
        B3: 2,
        B5: 1,
        B6: 1,
        Ca: 1,
        Mg: 1,
        Zn: 1,
        Cr: 2
    },
    add2: {
        C: 2,
        B1: 2,
        B2: 2,
        B3: 2,
        B5: 2,
        B6: 2,
        Mg: 1,
        Zn: 1,
        Cr: 1
    },
    add3: {
        E: 1,
        C: 1,
        B1: 1,
        B2: 1,
        B3: 1,
        B5: 1,
        B6: 1,
        Ca: 1,
        Mg: 1
    },
    add4: {
        A: 2,
        E: 1,
        C: 1,
        B6: 1,
        Ca: 1,
        Mg: 1,
        Zn: 2,
        Se: 1
    }
};

const pointsByAge = {
    0: {
        A: 2,
        D: 1,
        B6: 1,
        B7: 1,
        Ca: 1,
        Zn: 1
    },
    1: {},
    2: {
        D: 1,
        O3: 1,
        Ca: 1,
        Mg: 1,
        Zn: 1,
        Se: 1,
        Cr: 1
    }
};

const doses = {
    A: ['1000 &micro;g/день', '2000 &micro;g/день', '2500 &micro;g/день', '3000 &micro;g/день'],
    D: ['3000 ME', '4000 ME', '5000 ME', '5000 ME'],
    E: ['150 mg/день', '200 mg/день', '300 mg/день', '400 mg/день'],
    C: ['800 mg/день', '1600 mg/день', '2000 mg/день', '2800 mg/день'],
    B1: ['15 mg/день', '25 mg/день', '35 mg/день', '35 mg/день'],
    B2: ['15 mg/день', '25 mg/день', '35 mg/день', '35 mg/день'],
    B3: ['25 mg/день', '30 mg/день', '30 mg/день', '50 mg/день'],
    B5: ['30 mg/день', '50 mg/день', '100 mg/день', '130 mg/день'],
    B6: ['45 mg/день', '60 mg/день', '75 mg/день', '95 mg/день'],
    B12: ['10 &micro;g/день', '20 &micro;g/день', '30 &micro;g/день', '40 &micro;g/день'],
    B9: ['200 &micro;g/день', '350 &micro;g/день', '500 &micro;g/день', '600 &micro;g/день'],
    B7: ['30 &micro;g/день', '60 &micro;g/день', '120 &micro;g/день', '180` &micro;g/день'],
    O3: ['250 mg/день', '500 mg/день', '700 mg/день', '1050 mg/день'],
    O6: ['15 mg/день', '150 mg/день', '200 mg/день', '260 mg/день'],
    Ca: ['0 mg/день', '200 mg/день', '300 mg/день', '400 mg/день'],
    Mg: ['50 mg/день', '100 mg/день', '200 mg/день', '250 mg/день'],
    Fe: ['5 mg/день', '7 mg/день', '9 mg/день', '15 mg/день'],
    Zn: ['5 mg/день', '10 mg/день', '15 mg/день', '20 mg/день'],
    Mn: ['1 mg/день', '3 mg/день', '6 mg/день', '9 mg/день'],
    Se: ['25 mg/день', '75 mg/день', '100 mg/день', '150 mg/день'],
    Cr: ['25 mg/день', '50 mg/день', '100 mg/день', '200 mg/день']
};

const vitaminsDict = {
    A: 'Витамин А',
    D: 'Витамин D',
    E: 'Витамин Е',
    C: 'Витамин С',
    B1: 'Витамин B1',
    B2: 'Витамин В2',
    B3: 'Витамин В3',
    B5: 'Витамин В5',
    B6: 'Витамин В6',
    B12: 'Витамин В12',
    B9: 'Витамин В9',
    B7: 'Витамин В7',
    O3: 'ОМЕГА- 3',
    O6: 'ОМЕГА- 6',
    Ca: 'Кальций',
    Mg: 'Магний',
    Fe: 'Железо',
    Zn: 'Цинк',
    Mn: 'Марганец',
    Se: 'Селен',
    Cr: 'Хром',
};