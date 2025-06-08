const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

//GET / todos - Lista de todos os todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1})
        res.json(todos)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar todos' })
    }
})

// POST /todos - Cria um novo todo
router.post('/', async (req, res) => {
  const { text } = req.body

  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Texto da tarefa é obrigatório' })
  }

  try {
    const newTodo = new Todo({ text })
    const savedTodo = await newTodo.save()
    res.status(201).json(savedTodo)
  } catch (err) {
    res.status(500).json({ error: 'Erro ao salvar tarefa' })
  }
})

// DELETE todo by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Todo.findByIdAndDelete(id)
    if (!deleted) return res.status(404).json({ error: 'Tarefa não encontrada' })
    res.status(200).json({ message: 'Tarefa deletada com sucesso' })
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar tarefa' })
  }
})

// PUT /api/todos/:id - Atualiza um todo (texto e/ou completed)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { text, completed } = req.body

    // Criar um objeto com os campos que vieram para atualizar
    const updateData = {}
    if (text !== undefined) updateData.text = text
    if (completed !== undefined) updateData.completed = completed

    // Atualiza o documento e retorna o novo
    const updatedTodo = await Todo.findByIdAndUpdate(id, updateData, { new: true })

    if (!updatedTodo) return res.status(404).json({ error: 'Tarefa não encontrada' })

    res.json(updatedTodo)
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' })
  }
})


module.exports = router;
