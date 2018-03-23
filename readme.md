2. “Wyniki zawodów” - W Krakowie często odbywają się zawody wspinaczkowe. Przygotuj stronę, która pozwoliłaby organizatorom na bieżąco umieszczać wyniki online. 
Kiedy zawodnik w trakcie zawodów ukończy drogę, organizatorzy za pomocą strony powinni być w stanie oznaczyć kto jaką drogę ukończył. Lista dróg powinna być zamknięta (tj. drogi powinny być do wyboru a nie do dowolnego wpisywania) i każdej drodze powinna odpowiadać liczba punktów. Również lista zawodników powinna być zamknięta, pobierana z serwera. Po wejściu na stronę, użytkownik powinien widzieć aktualny ranking zawodników (pod względem liczby punktów) z listą ukończonych przez nich dróg oraz przycisk do dodania nowego wpisu (zawodnik, ukończona droga). Punktacja powinna być automatycznie liczona przez serwer. API i strona powinny również umożliwiać dyskwalifikację zawodnika, co powoduje usunięcie jego wpisu z rankingu.
W projekcie nie wymagamy persystencji (lista dróg, aktualny ranking itd mogą być trzymane w pamięci i działać tylko w obrębie jednego uruchomienia).  

Minimalne wymagania: 
1) Serwer HTTP z endpointami do pobierania listy dróg, listy zawodników, pobierania aktualnego rankingu, dodawania przejścia i dyskwalifikacji zawodnika.
2) Prosta strona umożliwiająca wykonanie powyższych operacji - strona główna to aktualny ranking z przyciskiem umożliwiającym dodanie nowego przejścia. 

Możliwe rozwinięcia (*):
Każdy projekt powinien umożliwiać wystartowanie go za pomocą jednej komendy. Przygotuj taki package.json żeby po odpaleniu npm start Twój projekt się uruchamiał.
Zbuduj image dockerowy który po wystartowaniu uruchamia Twój serwer.

Uwaga: Jeśli czujesz się mocniej w tematach “backendowych”, możesz zrobić tylko backend. Jeśli wolisz pracować na front-endzie, ogranicz się do jednego wybranego endpointu, a poświęć więcej czasu na wygląd strony.