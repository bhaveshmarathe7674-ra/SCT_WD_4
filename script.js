* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b);
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.wrapper {
  max-width: 500px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  margin: 60px auto;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

header {
  text-align: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 2rem;
  margin-bottom: 5px;
}

.input-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-area input,
.input-area button {
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
}

#taskInput {
  font-size: 1rem;
}

#taskDate {
  color: #333;
}

#addTask {
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

#addTask:hover {
  background-color: #45a049;
}

ul {
  list-style: none;
  margin-top: 20px;
}

li {
  background: rgba(255, 255, 255, 0.15);
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

li:hover {
  transform: scale(1.02);
  background: rgba(255, 255, 255, 0.2);
}

.task-info {
  flex: 1;
}

.task-info.completed {
  text-decoration: line-through;
  opacity: 0.6;
}

.task-info small {
  display: block;
  color: #ddd;
  font-size: 0.8rem;
}

.buttons button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: 10px;
  transition: color 0.3s ease;
}

.buttons button:hover {
  color: #ffeb3b;
}

footer {
  text-align: center;
  padding: 15px;
  font-size: 0.9rem;
  margin-top: auto;
  background: rgba(0, 0, 0, 0.2);
}
