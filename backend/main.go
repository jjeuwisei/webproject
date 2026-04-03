package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

func main() {
	const filepath = "."
	const port = ":6767"
	fs := http.FileServer(http.Dir("../frontend/webproject/dist"))
	http.HandleFunc("/api/projects", projectsHandler)
	http.HandleFunc("/api/me", aboutmeHandler)
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if len(r.URL.Path) >= 4 && r.URL.Path[:4] == "/api" {
			http.NotFound(w, r)
			return
		}

		path := "../frontend/webproject/dist" + r.URL.Path

		_, err := os.Stat(path)
		if os.IsNotExist(err) {
			http.ServeFile(w, r, "../frontend/webproject/dist/index.html")
			return
		}
		fs.ServeHTTP(w, r)
	})
	log.Printf("server running at %s", port)
	http.ListenAndServe(port, nil)
}

type Project struct {
	Type        string `json:"type"`
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Tech        string `json:"tech"`
	GithubURL   string `json:"githubUrl"`
}

type Me struct {
	Type        string `json:"type"`
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

func projectsHandler(w http.ResponseWriter, r *http.Request) {
	projects := []Project{
		{
			Type:        "project",
			ID:          1,
			Title:       "Tic-tac-toe in React",
			Description: "A tic tac toe game in react that utilizes state feature in react",
			Tech:        "Javascript, React",
			GithubURL:   "https://github.com/jjeuwisei/httpserver",
		},
		{
			Type:        "project",
			ID:          2,
			Title:       "Personal Website",
			Description: "Personal website made using react + go",
			Tech:        "Go, Javascript, React",
			GithubURL:   "https://github.com/jjeuwisei/webproject",
		},
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(projects)
}
func aboutmeHandler(w http.ResponseWriter, r *http.Request) {
	me := []Me{
		{
			Type:  "me",
			ID:    1,
			Title: "About Me",
			Description: "Welcome to my web page. Hi my name is Garl Joshua Marcial." +
				"Currently studying computer science in university, and i am working my absolute best " +
				"to be good at programming and know lots of things about computers!, So this site will be a " +
				"documentation of my journey. I will update this from time to time (hopefully) " +
				"as i learn things to reflect on my learnings",
		},
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(me)
}
