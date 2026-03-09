# Angular Interview Questions & Practice

A comprehensive collection of questions and practical exercises to prepare for Angular interviews. This project covers fundamental to advanced concepts of Angular, TypeScript, and web development.

## 📋 Content

### Fundamentals
- **Components**: Creation, lifecycle, inter-component communication
- **Directives**: Structural and attribute directives
- **Pipes**: Built-in and custom pipes
- **Services & Dependency Injection**: Singleton, Providers, Factory
- **Modules**: NgModule, feature modules, lazy loading

### Advanced Topics
- **RxJS & Observables**: Operators, subscriptions, reactive patterns
- **Change Detection**: OnPush strategy, detectChanges()
- **Routing**: Guards, resolvers, lazy loading
- **Forms**: Template-driven and Reactive Forms, validation
- **HTTP**: HttpClient, interceptors, error handling
- **Testing**: Unit tests, integration tests, e2e
- **Performance**: Optimization, AOT compilation, tree-shaking

### TypeScript
- **Types & Interfaces**: Definition and usage
- **Generics**: Type parameters, constraints
- **Decorators**: Angular customization
- **Async/Await & Promises**: Asynchronous handling

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Angular CLI 15+

### Steps

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Run e2e tests
npm run e2e
```

## 📁 Project Structure

```
angular-interview-questions/
├── interfaces-start/          # TypeScript interfaces exercises
│   ├── src/
│   │   ├── counter.ts         # Counter component
│   │   ├── main.ts            # Entry point
│   │   └── style.css          # Styles
│   ├── index.html
│   ├── package.json
│   └── tsconfig.json
├── README.md
└── .gitignore
```

## 🎯 Topics by Level

### Beginner Level
- [ ] Angular component basic structure
- [ ] Data binding (interpolation, property binding, event binding)
- [ ] Two-way binding with ngModel
- [ ] Basic directives: *ngIf, *ngFor, *ngSwitch
- [ ] Pipes: date, currency, uppercase, lowercase
- [ ] Component styling: inline, external, view encapsulation

### Intermediate Level
- [ ] Component lifecycle (OnInit, OnDestroy, etc.)
- [ ] Component communication (@Input, @Output, EventEmitter)
- [ ] Services and dependency injection
- [ ] RxJS: Observables, Subjects, common operators
- [ ] Reactive Forms
- [ ] HttpClient and error handling

### Advanced Level
- [ ] Change Detection strategies
- [ ] Routing guards (CanActivate, CanDeactivate)
- [ ] Resolvers
- [ ] Custom directives and decorators
- [ ] Performance optimization
- [ ] Testing: Jasmine, Karma, Protractor
- [ ] Architecture patterns: Smart/Presentational components

## 💡 Common Interview Questions

### Fundamentals
1. **What's the difference between Components and Directives?**
2. **How does two-way binding work in Angular?**
3. **What is a Service and why is it used?**

### RxJS & Observables
4. **What's the difference between an Observable and a Promise?**
5. **What is a Subject and when should you use it?**
6. **What are the most common RxJS operators?**

### Change Detection
7. **How does Change Detection work in Angular?**
8. **What is the OnPush strategy?**

### Routing
9. **How do you implement lazy loading in Angular?**
10. **What is a routing Guard?**

## 🧪 Testing

The project includes examples of:
- Unit tests with Jasmine
- Service mocking
- Component testing
- Observable testing

```bash
# Run tests
npm test

# With coverage
npm run test:coverage
```

## 📚 Recursos Recomendados

- [Angular Official Documentation](https://angular.io/docs)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [RxJS Documentation](https://rxjs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Angular Best Practices](https://angular.io/guide/styleguide)

## 🤝 Contributing

Contributions are welcome. Please:
1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new-feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 🎓 Interview Tips

✅ **Do:**
- Explain your thinking while coding
- Ask questions if you don't understand something
- Write clean and well-structured code
- Use real-world examples and use cases

❌ **Avoid:**
- Memorizing answers
- Talking too much without practical examples
- Ignoring unit tests
- Code without comments in complex sections

## 📞 Contact

For questions or suggestions, open an issue in this repository.

---

**Good luck with your interview! 🚀**

*Last updated: March 2026*
