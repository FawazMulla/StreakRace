import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingScreen from './LoadingScreen';

// Mock sessionStorage
const mockSessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
Object.defineProperty(window, 'sessionStorage', {
  value: mockSessionStorage
});

describe('LoadingScreen Component', () => {
  let mockOnComplete;

  beforeEach(() => {
    mockOnComplete = jest.fn();
    mockSessionStorage.getItem.mockClear();
    mockSessionStorage.setItem.mockClear();
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('renders loading screen on first visit', () => {
    mockSessionStorage.getItem.mockReturnValue(null);
    
    render(<LoadingScreen onComplete={mockOnComplete} isFirstVisit={true} />);
    
    expect(screen.getByText('INITIALIZING RACE SYSTEMS')).toBeInTheDocument();
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  test('does not render if already visited in session', () => {
    mockSessionStorage.getItem.mockReturnValue('true');
    
    render(<LoadingScreen onComplete={mockOnComplete} isFirstVisit={true} />);
    
    expect(screen.queryByText('INITIALIZING RACE SYSTEMS')).not.toBeInTheDocument();
    expect(mockOnComplete).toHaveBeenCalled();
  });

  test('does not render if not first visit', () => {
    mockSessionStorage.getItem.mockReturnValue(null);
    
    render(<LoadingScreen onComplete={mockOnComplete} isFirstVisit={false} />);
    
    expect(screen.queryByText('INITIALIZING RACE SYSTEMS')).not.toBeInTheDocument();
    expect(mockOnComplete).toHaveBeenCalled();
  });

  test('progress counter updates during loading', async () => {
    mockSessionStorage.getItem.mockReturnValue(null);
    
    render(<LoadingScreen onComplete={mockOnComplete} isFirstVisit={true} />);
    
    expect(screen.getByText('0%')).toBeInTheDocument();
    
    // Fast forward time to see progress updates
    act(() => {
      jest.advanceTimersByTime(500); // Advance by 500ms
    });
    
    await waitFor(() => {
      const progressText = screen.getByText(/\d+%/);
      const progressValue = parseInt(progressText.textContent);
      expect(progressValue).toBeGreaterThan(0);
    });
  });

  test('sets session storage when loading completes', async () => {
    mockSessionStorage.getItem.mockReturnValue(null);
    
    render(<LoadingScreen onComplete={mockOnComplete} isFirstVisit={true} />);
    
    // Fast forward to completion
    act(() => {
      jest.advanceTimersByTime(3000); // Complete the 3-second loading
    });
    
    await waitFor(() => {
      expect(mockSessionStorage.setItem).toHaveBeenCalledWith('streakrace-visited', 'true');
    });
    
    // Wait for the completion callback
    act(() => {
      jest.advanceTimersByTime(500); // Additional 500ms for completion delay
    });
    
    await waitFor(() => {
      expect(mockOnComplete).toHaveBeenCalled();
    });
  });

  test('renders F1 car SVG', () => {
    mockSessionStorage.getItem.mockReturnValue(null);
    
    render(<LoadingScreen onComplete={mockOnComplete} isFirstVisit={true} />);
    
    const carSvg = document.querySelector('.f1-car svg');
    expect(carSvg).toBeInTheDocument();
  });

  test('renders racing grid background', () => {
    mockSessionStorage.getItem.mockReturnValue(null);
    
    render(<LoadingScreen onComplete={mockOnComplete} isFirstVisit={true} />);
    
    const gridBackground = document.querySelector('.racing-grid-background');
    expect(gridBackground).toBeInTheDocument();
  });

  test('renders track line', () => {
    mockSessionStorage.getItem.mockReturnValue(null);
    
    render(<LoadingScreen onComplete={mockOnComplete} isFirstVisit={true} />);
    
    const trackLine = document.querySelector('.track-line');
    expect(trackLine).toBeInTheDocument();
  });
});