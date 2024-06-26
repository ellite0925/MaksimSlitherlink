import {ReduceStore} from 'flux/utils'
import AppDispatcher from './AppDispatcher'
import ActionTypes from './ActionTypes'
import Board from '../models/board'
import ProblemStore from './ProblemStore'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class BoardStore extends ReduceStore {
  constructor() {
    super(AppDispatcher)
  }

  getInitialState() {
    return new Board(ProblemStore.getProblem(Number(cookies.get("currentProblemId") || 1)))
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.SELECT_PROBLEM:
        return new Board(ProblemStore.getProblem(action.problemId))
      case ActionTypes.DRAW_LINE:
        return state.setLine(action.linePosition.x, action.linePosition.y)
      case ActionTypes.ERASE_LINE:
        return state.removeLine(action.linePosition.x, action.linePosition.y)
      default:
        return state
    }
  }
}

export default new BoardStore()
