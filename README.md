Projekt "Minesweeper" został stworzony w celu przetestowania zaawansowanych algorytmów, pracy z tablicami dwuwymiarowymi, tworzenia poziomów gry oraz implementacji obiektowości, bazując na zasadach znanej gry Saper. Gra oferuje trzy poziomy trudności, dając graczowi możliwość dostosowania jej do swoich preferencji. W grze znajduje się licznik, który aktualizuje się co sekundę, oraz licznik flag, które gracz może umieszczać poprzez prawy przycisk myszy lub na telefonach poprzez dłuższe przytrzymywanie.

W sytuacji, gdy gracz kliknie na bombę, gra zatrzymuje się, wymagając rozpoczęcia nowej rozgrywki. Została także zaimplementowana poprawna funkcja liczenia bomb wokół konkretnej komórki. Po kliknięciu, sprawdzane są wszystkie otaczające komórki. Jeśli przynajmniej jedna z nich zawiera bombę, wynik informuje o ilości bomb w sąsiedztwie. W przeciwnym przypadku ta operacja powtarza się dla pozostałych komórek. Implementacja tej funkcji stanowiła dla mnie wyzwanie, wymagając poprawnego sprawdzania wierszy, kolumn oraz właściwego zliczania bomb.

Czego się nauczyłem:
* programownia obiektowego w JS
* tworzenia bardziej skomplikowanych algorytmów
* tworzenia poziomów
* stworzenia prostego licznika
* przygotowania projektu są zrealizowane z dokładnością 1:1 względem oryginału zarówno pod względem funkcjonalności, jak i wyglądu.
