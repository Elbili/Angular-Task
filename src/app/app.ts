import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { About } from "./about/about";
import { Footer } from "./footer/footer";
import { Contact } from "./contact/contact";
import { NotFound } from "./not-found/not-found";
import { Navbar } from "./navbar/navbar";
import { Gallary } from "./gallery/gallary";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, Footer, Contact, NotFound, Navbar, Gallary],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routing');
}
