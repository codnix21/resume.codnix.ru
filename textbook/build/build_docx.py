# -*- coding: utf-8 -*-
"""Сборка итоговой рукописи."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from docx_lib import Book
from labs import render_labs

BASE = Path(__file__).resolve().parent
OUT = Path("/workspace/Praktikum_Bezopasnost_veb_prilozheniy_FINAL.docx")


def main():
    book = Book()
    book.title_page()
    book.start_body()
    for name in ("front.md", "ch1.md", "ch2.md"):
        book.render((BASE / name).read_text(encoding="utf-8"))
    render_labs(book)
    for name in ("cases.md", "assess.md", "back.md"):
        book.render((BASE / name).read_text(encoding="utf-8"))
    book.h(1, "Приложение Л. Учебное хранение пароля")
    book.para(
        "Функция не подключена к маршруту входа. Она показывает разницу между необратимым хранением пароля и шифрованием хранилища из практической работы 13."
    )
    book.code_file("src/passwords.js", "Учебное хранение пароля функцией scrypt")
    book.para(
        "Листинг приведён как справочное приложение к теме аутентификации. Маршрут сессии стенда эту функцию не вызывает, что зафиксировано в лабораторной работе 3."
    )
    book.save(OUT)
    print(OUT)


if __name__ == "__main__":
    main()
